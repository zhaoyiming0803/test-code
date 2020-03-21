/**
 * 洗牌算法，连续运行10次，第二种比第一种更加均匀
 */

;(function () {

  return

  function randomSort () {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var i = 0; i < arr.length; i++) {
      arr.sort((a, b) => Math.random() > 0.5)
      console.log(arr)
    }
  }

  randomSort()

})();

;(function () {

  function randomSort () {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var len = arr.length
    
    for (var j = 0; j < len; j++) {
      for (var i = 0; i < len; i++) {
        var random = Math.floor(Math.random() * len)
        // arr[random] = arr.splice(i, 1, arr[random])[0]
        var a = arr[random]
        var b = arr[i]
        arr[random] = b
        arr[i] = a
      }
      console.log(arr)
    }
  }

  randomSort()

})();