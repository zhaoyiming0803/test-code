; (function () {

  function p1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }
  
  function p2 (data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data + '^_^');
        resolve(2);
      }, 2000);
    });
  }

  function p3 (data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data + '^_^');
        resolve(3);
      }, 3000);
    });
  }

  function promiseWaterfull (arr) {
    var index = 0;

    function next (data) {
      if (index < arr.length) {
        return arr[index++](data).then(res => next(res));
      } else {
        return Promise.resolve(3);
      }
    }

    return next();
  }

  promiseWaterfull([p1, p2, p3]).then(res => {
    console.log(res);
  });

})();

; (function () {

  function p1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(1);
      }, 1000);
    });
  }
  
  function p2 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    });
  }

  function p3 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3);
      }, 3000);
    });
  }

  function promiseAll (arr, callback) {
    var index = 0;

    for (var i = 0; i < arr.length; i++) {
      arr[i]()
        .then(res => {
          if (index++ === arr.length - 1) {
            callback('success');
          }
        })
        .catch(res => {
          callback('fail');
        });
    }
  }

  promiseAll([p1, p2, p3], res => {
    console.log(res);
  });

})();