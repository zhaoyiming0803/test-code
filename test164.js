;(function () {

  const arr = [1, 4, 6, 8]
  const sum = 9

  function search (arr, sum) {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
      const cur = arr[i]
      if (set.has(9-cur)) {
        return true
      }
      set.add(cur)
    }
    return false
  }

  console.log(search(arr, sum))

})();