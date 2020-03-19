; (function () {

  const arr = [ 0, 1, 2, 3, 4, 5, 6, 7 ]

  function resetPriority (arr) {
    const index = Math.floor(Math.random() * arr.length)
    return [ arr[ index ] ].concat(arr.slice(0, index), arr.slice(index + 1))
  }

  console.log(resetPriority(arr))

})();