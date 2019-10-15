; (function () {

  function App() {
    this.ctx = {
      req: {},
      res: {}
    }
    this.middleware = [];
  }

  App.prototype.use = function use(fn) {
    this.middleware.push(fn);
  }

  App.prototype.run = function run() {
    var middleware = this.middleware;
    var ctx = this.ctx;

    function dispatch(i) {
      var fn = middleware[i];
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(ctx, function next() {
        return dispatch(i + 1);
      }));
    }

    return dispatch(0);
  }

  var app = new App();

  app.use(async function m1(ctx, next) {
    console.log(ctx);
    function query() {
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

  app.use(async function m2(ctx, next) {
    console.log('m2');
  });

  app.run();

})();