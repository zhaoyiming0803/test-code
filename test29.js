;(function () {

    console.log('script start');

    setTimeout(function() {
      console.log('setTimeout');
    }, 0);

    Promise.resolve()
        .then(function() {
          console.log('promise1');
        })
        .then(function() {
          console.log('promise2');

          Promise.resolve()
              .then(function() {
                  console.log('promise3');
              })
              .then(function() {
                  console.log('promise4');
              });
        });

    console.log('script end');

    Promise.resolve()
        .then(function() {
          console.log('promise5');
        })
        .then(function() {
          console.log('promise6');
        });
    
    /*
     * Microtask 通常来说就是需要在当前 task 执行结束后立即执行的任务，例如需要对一系列的任务做出回应，或者是需要异步的执行任务而又不需要分配一个新的 task，这样便可以减小一点性能的开销。
     * microtask 任务队列是一个与 task 任务队列相互独立的队列，microtask 任务将会在每一个 task 任务执行结束之后执行。
     * 每一个 task 中产生的 microtask 都将会添加到 microtask 队列中，microtask 中产生的 microtask 将会添加至当前队列的尾部，并且 microtask 会按序的处理完队列中的所有任务。
     * microtask 类型的任务目前包括了 MutationObserver 以及 Promise 的回调函数。
     * http://www.cnblogs.com/dong-xu/p/7000163.html
     * http://www.cnblogs.com/dong-xu/p/7000139.html
     * https://github.com/zymseo/Promise
    */

})();