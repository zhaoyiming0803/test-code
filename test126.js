(function () {
  // reference test137.js

  function co(gen) {
    const g = gen();

    return new Promise(function (resolve, reject) {
      if (!g || typeof g.next !== "function") {
        return reject(g);
      }

      next();

      function next(value) {
        const res = g.next(value);

        if (res.done) {
          return resolve(res.value);
        }

        if (Object.prototype.toString.call(res.value) === "[object Promise]") {
          return res.value.then(
            (res) => next(res),
            (error) => reject(error)
          );
        }

        return reject(
          new TypeError(
            "You may only yield a function, promise, generator, array, or object, " +
              'but the following object was passed: "' +
              String(res.value) +
              '"'
          )
        );
      }
    });
  }

  function* fn() {
    const a = yield p1();
    const b = yield p2();
    return a + b;
  }

  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  // function p2() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(2);
  //     }, 1000);
  //   });
  // }

  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("cry...");
      }, 1000);
    });
  }

  co(fn)
    .then((res) => {
      console.log("res", res);
    })
    .catch((res) => {
      console.log("error: ", res);
    });
})();
