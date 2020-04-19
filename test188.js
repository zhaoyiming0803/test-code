(function () {
  // 递增或递减（一元操作符），是在包含它们的语句被求值之后才执行
  var a = 1;
  var b = a++ - 100;
  console.log(a); // 2
  console.log(b); // -99
})();
