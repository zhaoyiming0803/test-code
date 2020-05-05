(function () {
  // https://github.com/zymfe/test-code/blob/master/test180.js
  // 为什么 [] == ![]
  // https://segmentfault.com/a/1190000008594792
  // 关于相等操作符，可参考《JavaScript高级程序设计》第51页
  var a = [];
  var b = ![];
  console.log(a == b); // true
  console.log(a == 0); // true
  console.log(b == false); // true
  console.log(a == false); // true
  console.log([] == []); // false
})();

(function () {
  var a = 1;
  var b = {};
  console.log(a + b); // 1[object Object]

  var c = 1;
  var d = {
    // 重写 valueOf 方法
    valueOf: function () {
      return 1;
    },
  };
  console.log("c+d=" + (c + d));

  var e = 1;
  var f = {
    // 重写 toString 方法
    toString: function () {
      return 2;
    },
  };
  console.log("e+f=" + (e + f));
})();

(function () {
  var a = 1;
  var b = {};
  console.log(a + b); // 1[object Object]
})();

(function () {
  var a = 1;
  var b = [];
  console.log(a + b); // "1"

  var c = 1;
  var d = [1];
  console.log(c + d); // "11"

  var e = 1;
  var f = [1, 2, 3];
  console.log(e + f); // "11,2, 3"

  var g = 1;
  var h = [1, 2, 3];
  console.log(h + g); // "1, 2, 31"
})();
