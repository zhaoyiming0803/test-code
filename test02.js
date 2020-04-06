(function () {
  function fn() {
    var a = 1;
    return function innerFn() {
      a += 1;
      return a;
    };
  }

  const innerFn = fn();
  console.log(innerFn()); // 2
  console.log(innerFn()); // 3
  console.log(innerFn()); // 4
  console.log(innerFn()); // 5
  console.log(innerFn()); // 6
})();
