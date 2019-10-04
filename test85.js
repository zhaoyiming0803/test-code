;(function () {

  function a () {
    console.log('a');
    b();
  }

  function b () {
    console.log('b');
    c();
  }

  function c () {
    console.log('c');
    // try 和 catch 是在当前调用栈里，遇到 setTimeout 的时候，把里面的回调函数放在了任务队列里了
    // try 结束未发现异常也就不执行 catch 了，当调用栈执行结束，开始任务队列里的代码
    // 这个时候抛出了错误，但已经没有接受此错误的地方了，因此报错

    // 无论使用什么方式，都无法捕获异常。归根结底这是代码编写的问题，而非 try/catch 的问题。
    // 要捕获到异常，必须在 throw new Error 的直接外出用 try catch 包起来才行
    // https://juejin.im/post/5c199882f265da617464c745
    setTimeout(() => {
      d();
    }, 1000);
  }

  // try {
  //   a();
  // } catch (error) {
  //   console.log('---- error ----');
  // }

})();

;(function () {

  var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      a();
    }, 100);
  });

  p1
    .then(function (res) {

    })
    // 在 Promise 的实现代码里，把回调函数包裹在 try 里了，所以捕获的到了。
    .catch(function (error) {
      console.log(error);
    });

})();