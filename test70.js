// 使用Function构造器生成的函数，并不会在创建它们的上下文中创建闭包；它们一般在全局作用域中被创建。
// 当运行这些函数的时候，它们只能访问自己的本地变量和全局变量，不能访问Function构造器被调用生成的上下文的作用域。
// 这和使用带有函数表达式代码的 eval 不同

;(function () {

  var n = 1;

  function fn () {
    var n = 2;
    // return new Function('a', 'b', 'return a + b');
    return new Function('a', 'b', 'return a + b + n;');
  }

  console.log(fn()(1, 2));

})();

;(function () {

  var str = 'var a = 1; var b = 2; return a + b + this.c;'

  var obj = {
    c: 100
  }

  var fn = new Function(str).bind(obj)

  console.log(fn())

  eval('var a = 1; var b = 2; console.log(a+b)')

})();