(function () {
  function fn1(fn2) {
    return function innerFn() {
      return fn2() + " inner";
    };
  }

  function fn2() {
    return "fn2";
  }

  console.log(fn1(fn2)());
})();
