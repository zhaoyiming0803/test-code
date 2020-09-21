;(function () {

  function sum (num) {
    if (num > 0) {
      return sum(num - 1) + num
    } else {
      return num
    }
  }

  console.log(sum(10))

})();