;(function () {

  function curry (fn) {
    return function (x) {
      return function (y) {
        return function (z) {
          return x + y + z
        }
      }
    }
  }

  var add = curry((x, y, z) => x + y + z)

  console.log(add(1)(2)(3))

})();