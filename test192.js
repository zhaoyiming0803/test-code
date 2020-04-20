(function () {
  // 基本类型的数值与数值对象之间的区别：
  // constructor 指向相同
  // 但是 instanceOf 语句判断不同
  var num1 = 100;
  console.log(num1.valueOf() === num1); // true
  console.log(num1.constructor); // [Function: Number]
  console.log(num1 instanceof Number); // false

  var num2 = new Number(200);
  console.log(num2.valueOf() === 200); // true
  console.log(num2.valueOf() === num2); // false
  console.log(num2.constructor); // [Function: Number]
  console.log(num2 instanceof Number); // true

  var num3 = Number(300);
  console.log(num3.valueOf() === num3); // true
})();

(function () {
  // 基本类型的布尔值与布尔对象之间的区别
  var boo1 = true;
  var boo2 = new Boolean(true);
  console.log(boo1 instanceof Boolean); // false
  console.log(boo2 instanceof Boolean); // true
})();

(function () {
  // 即使字符串中包含双字节字符（不是占用一个字节的 ASCII 字符），每个字符也仍然算一个字符
  var str = "hello 你好 world";
  console.log(str.charAt(4)); // o
  console.log(str.charAt(6)); // 你
  console.log(str.charAt(7)); // 好
})();

(function () {
  var str = "hello world ell haha";
  var reg = /e(l(l))/g;
  str.replace(reg, ($0, $1, $2) => {
    console.log("$0: ", $0);
    console.log("$1: ", $1); // $0 的子串
    console.log("$2: ", $2); // $1 的子串
  });
})();
