;(function () {
  
  console.time('time');

  var arr = [1, 2, -10, -100, 99, 101, 102, 103, 104, 105];

  function bubbleSort (arr) {
    var num = 0;
    for (var i = 0; i < arr.length; i += 1) {
      var mark = true;
      for (var j = 0; j < arr.length - 1; j += 1) {
        if (arr[j] > arr[j+1]) {
          mark = false;
          arr[j] = arr.splice(j+1, 1, arr[j])[0];
        }
        num += 1;
      }
      if (mark) break;
    }

    return {
      arr: arr,
      num: num
    };
  }

  console.log(bubbleSort(arr));
  console.timeEnd('time');
})();