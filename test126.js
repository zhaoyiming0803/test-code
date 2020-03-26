; (function () {

  // reference test137.js

  function co(gen) {
    const g = gen();
    next();
    function next(value) {
      const res = g.next(value);
      if (!res.done) {
        if (Object.prototype.toString.call(res.value) === '[object Promise]') {
          res.value.then(res => next(res))
        } else {
          next(res.value)
        }
      }
    }
  }

  function* fn() {
    const a = yield p1();
    const b = yield p2();
    console.log(a + b);
  }

  function p1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  function p2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 1000);
    });
  }

  co(fn);

})();