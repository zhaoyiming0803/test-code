;(function () {

  function fn1 () {
    console.log(arguments); // 1,2,3
  }

  fn1(1, 2, 3);

  function fn2 () {
    arguments[0] = 100;
    console.log(arguments); // 100, 5, 6
  }

  fn2(4, 5, 6);

  function fn3 () {
    console.log(arguments.callee === fn3); // true
  }

  fn3(1, 2, 3);

})();