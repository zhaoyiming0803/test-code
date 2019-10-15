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

  // promiseWaterfull([p1, p2, p3]).then(res => {
  //   console.log(res);
  // });

})();

; (function () {

  function p1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
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
    var len = arr.length;

    for (var i = 0; i < arr.length; i++) {
      arr[i]()
        .then(res => {
          if (--len === 0) {
            callback('success');
          }
        })
        .catch(res => {
          callback('fail');
        });
    }
  }

  // promiseAll([p1, p2, p3], res => {
  //   console.log(res);
  // });

})();

// promiseAll 比 promiseWaterfull 先输出结果
// 因为 promiseAll 是并发执行
// 而 promiseWaterfull 是在队列中按序执行

;(function () {

  function App () {
    this.ctx = {
      req: {},
      res: {}
    }
    this.middleware = [];
  }

  App.prototype.use = function use (fn) {
    this.middleware.push(fn);
  }

  App.prototype.run = function run () {
    var middleware = this.middleware;
    var ctx = this.ctx;

    function dispatch (i) {
      var fn = middleware[i];
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(ctx, function next () {
        return dispatch(i + 1);
      }));
    }

    return dispatch(0);
  }

  var app = new App();

  app.use(async function m1 (ctx, next) {
    console.log(ctx);
    function query () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('m1');
        }, 1000);
      });
    }
    const res = await query();
    console.log(res);
    await next(); // m2 是否执行取决于当前 next 方法是否执行
    console.log('m1-1');
  });

  app.use(async function m2 (ctx, next) {
    console.log('m2');
  });

  app.run();

})();