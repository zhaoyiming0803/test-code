(function () {
  // 证明作用域是在函数定义时确定的，而不是在函数执行时
  // 如果是作用域在函数执行时确定，那么 getStr() 是可以访问到 defaultStr 变量的
  // 解决方法：把 defaultStr 变量放到和 fn、getStr 同一层即可。
  // JavaScript 高级程序设计 - 179页
  function fn() {
    var defaultStr = "hello world";
    var str = getStr();
    return "get [" + str + "] from " + arguments.callee.name;
  }

  function getStr() {
    return defaultStr; // defaultStr is not defined
  }

  console.log(fn());
})();
