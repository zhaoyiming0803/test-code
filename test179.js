(function () {
  // 如果第一个字符不是数字或负号，parseInt会返回NaN
  // 如果第一个字符是数字或负号，那么parseInt会继续解析第二个字符，直到全部解析完或遇到了一个非数字字符
  var a = "10a2";
  console.log(parseInt(a, 10)); // 10
  console.log(Number(a)); // NaN
  console.log(a - 0); // NaN
  console.log(+a); // NaN

  var b = "012345";
  console.log(parseInt(b, 8)); // 5349
  console.log(parseInt(b, 10)); // 12345

  var c = "0x12345";
  console.log(parseInt(c, 16)); // 74565

  var d = "1.23";
  console.log(parseInt(d, 10)); // 1
  console.log(parseFloat(d, 10)); // 1.23
})();
