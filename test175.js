(function () {
  var a = 1;
  console.log("1: ", a); // 1

  if (true) {
    a = 2;
    console.log("2: ", a); // 2

    function a() {}
    console.log("3: ", a); // 2
    a = 21;
    console.log("4: ", a); // 21
  }

  console.log("5: ", a); // 2
})();

(function () {
  var a = 1;
  console.log("11: ", a); // 1

  if (true) {
    console.log("22: ", a); // [(Function: a)];
    function a() {}
    a = 21;
    console.log("33: ", a); // 21
  }

  console.log("44: ", a); // [Function: a]
})();

(function () {
  var a = 2;
  if (true) {
    a(); // 222
    function a() {
      console.log("~~~", 222);
    }
  }
})();

(function () {
  // if 语句块内的函数声明不会被提升到 if 语句块外边
  // 但是 if 语句块内并没有用 let 或 const 定义变量，而 ES6 之前并没有块级作用域
  // 很奇怪...
  // 具体原因参考《JavaScript高级程序设计》第176页：
  // 在 if 和 else 语句中使用『函数声明』是一种无效的语法，各个浏览器尝试修正这种错误语法的方式并不一致
  // 所以这里不做讨论，以后避免这样使用即可
  return;
  console.log(a()); // a is not a function
  if (true) {
    function a() {
      return 1;
    }
  }
})();

(function () {
  // console.log(a); // Identifier 'a' has already been declared
  // if (true) {
  //   var a = 1;
  //   function a() {}
  // }
})();
