~(function () {
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log("a: ", a); // 2
  console.log("b: ", b); // 1
})();
