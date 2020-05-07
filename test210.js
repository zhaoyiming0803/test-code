//github.com/zymfe/test-code/blob/master/test70.js
https: ~(function () {
  function evil(str) {
    return new Function("return " + str);
  }
  console.log(evil("1+2*5")()); // 11
  console.log(evil("3/2*5")()); // 7.5
})();

~(function () {
  function fn() {
    return new Function("c", "var a = 1; var b = 2;return a + b + c;");
  }
  console.log(fn()(100)); // 103
})();

~(function () {
  // 注意这里与第一个demo的区别
  function evil() {
    return new Function("str", "return str;");
  }
  console.log(evil()("1+2*5")); // 1+2*5
  console.log(evil()("3/2*5")); // 3/2*5
})();

~(function () {
  // 注意这里与第一个demo的区别
  function evil(str) {
    // str is not defined
    // 只能访问自己的本地变量和全局变量，不能访问Function构造器被调用生成的上下文的作用域
    return new Function("return str;");
  }
  console.log(evil()("hello"));
})();
