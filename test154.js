;(function () {

  function unique (arr) {
    return Array.from(new Set(arr))
  }

  console.log(unique([1, 2, 4, 1,2]))

})();