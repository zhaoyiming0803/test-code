// Node.js 与 浏览器的 eventloop 差异：
// https://user-gold-cdn.xitu.io/2019/1/12/16841bad1cda741f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1

; (function () {

  return;

  console.log('start')

  setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function () {
      console.log('promise1')
    })
  }, 0)

  setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function () {
      console.log('promise2')
    })
  }, 0)

  Promise.resolve().then(function () {
    console.log('promise3')
  })

  console.log('end')

  // Node.js（version 10 及以下）环境中的执行结果：
  // start => end => promise3 => timer1 => timer2 => promise1 = >promise2

  // 浏览器环境中的执行结果：
  // start => end => promise3 => timer1 => promise1 => timer2 => promise2

  // Node.js (version 11) 环境中的执行结果与浏览器中一致
})();

; (function () {

  // Node.js 环境：
  // 以下回调执行不一定谁先谁后

  // 首先 setTimeout(fn, 0) === setTimeout(fn, 1)，这是由源码决定的

  // 进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 setTimeout 回调如果准备时间花费小于 1ms，那么就是 setImmediate 回调先执行了

  setTimeout(() => {
    console.log('timeout');
  }, 0)

  setImmediate(() => {
    console.log('immediate')
  })

})();