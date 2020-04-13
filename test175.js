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
  // if 语句块内的函数声明不会被提升到 if 语句块外边
  // 但是 if 语句块内并没有用 let 或 const 定义变量，而 ES6 之前并没有块级作用域
  // 很奇怪...
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
