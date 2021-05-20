;(function () {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const target = 7

  function sum (arr, target) {
    const res = []
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      if (arr[left] + arr[right] > target) {
        right -= 1
      } else if (arr[left] + arr[right] < target) {
        left += 1
      } else {
        res.push([arr[left++], arr[right--]])
      }
    }
    return res
  }

  console.log(sum(arr, target))

})();