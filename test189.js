(function () {
  // Date 的 valueOf 方法返回当前时间的时间戳（13位）
  var date = new Date();
  console.log(+date === Date.now()); // true
  console.log(+date === date.valueOf()); // true
})();
