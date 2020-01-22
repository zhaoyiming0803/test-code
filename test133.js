; (function () {

  function search (sum, arr) {
    if (arr.length < 3) {
      return
    }

    var res = []
    var startIdx = 0
    var endIdx = arr.length - 1

    while (startIdx <= endIdx && startIdx !== endIdx) {
      if (arr[ startIdx ] >= sum) {
        startIdx += 1
      } else if (arr[ endIdx ] >= sum) {
        endIdx -= 1
      } else if (arr[ startIdx ] + arr[ endIdx ] >= sum) {
        return search(sum, arr.slice(startIdx, endIdx)) || search(sum, arr.slice(startIdx + 1, endIdx + 1))
      } else {
        var diff = sum - arr[ startIdx ] - arr[ endIdx ]
        var idx = arr.findIndex(item => item === diff)
        if (idx !== -1) {
          return [ arr[ startIdx ], arr[ endIdx ], arr[ idx ] ]
        }
      }
    }
  }

  console.time('searchTime')
  console.log(search(21, [ 10, 20, 30, 40, 50, 60, 70, 1, 2, 76, 3, 5, 9, 24, 6, 4, 8, 7, 12, 12, 23, 13, 34, 56, 67, 34, 34, 45, 223, 123, 23, 32, 34, 45 ]))
  console.timeEnd('searchTime')

})();