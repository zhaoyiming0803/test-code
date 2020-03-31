;(function () {

  function compute(value) {
    var i = 0;
    while (i++ < 10) {
      value = value * (1 + 0.1)
    }
    return value
  }

  console.log(compute(10))

  console.log()

})();
