;(function () {

  function fn (a, b) {
    return a + b;
  }

  function connect (fn) {
    return function (a, b) {
      return fn(a, b)
    }
  }

  console.log(connect(fn)(1, 2))

  function square(n) {
    return n * n;
  }

  function add (a, b) {
    return a + b
  }
   
  function compose (fn1, fn2) {
    return function (a, b) {
      return fn1(fn2(a, b))
    }
  }

  console.log(compose(square, add)(1, 2))


})();