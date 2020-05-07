~(function () {
  function evil(str) {
    return new Function("return " + str);
  }
  console.log(evil("1+2*5")());
  console.log(evil("3/2*5")());
})();
