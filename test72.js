;(function () {

  setTimeout(function () {
    console.log(0);
  });

  setImmediate(function () {
    console.log(1);
  });

  console.log(2);

  Promise.resolve().then(function (res) {
    console.log(3);
  });

  process.nextTick(function () {
    console.log(4);
  });

  // 2 4 3 0 1

  // 优先级顺序：process.nextTick > Promise > setTimeout/setInterval > setImmediate
  // setTimeout需要使用红黑树，且after设置为0，其实会被node强制转换为1，存在性能上的问题，建议替换为setImmediate
  // process.nextTick有一些比较难懂的问题和隐患，从0.8版本开始加入setImmediate，使用时，建议使用setImmediate

  // 参考文档：
  // https://www.jianshu.com/p/837b584e1bdd
  // https://www.zhihu.com/question/23028843/answer/34585034
  // https://nodejs.org/en/blog/release/v0.10.0/
  // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
})();