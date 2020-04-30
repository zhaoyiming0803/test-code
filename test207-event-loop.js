~(function () {
  setTimeout(() => {
    console.log("setTimeout1");
    Promise.resolve().then(() => console.log("promise1"));
  });

  setTimeout(() => {
    console.log("setTimeout2");
    Promise.resolve().then(() => console.log("promise2"));
  });

  // node version v10.20.1
  // setTimeout1 setTimeout2 promise1 promise2

  // node version v12.16.1
  // 与浏览器中的执行效果相同
  // setTimeout1 promise1 setTimeout2 promise2
})();

~(function () {
  process.nextTick(() => {
    console.log("nextTick11");
    Promise.resolve().then(() => console.log("promise11"));
  });

  process.nextTick(() => {
    console.log("nextTick22");
    Promise.resolve().then(() => console.log("promise22"));
  });

  // nextTick 的优先级比 promise 高
  // nextTick11 nextTick22 promise11 promise22
})();
