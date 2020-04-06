(function () {
  var arr = [1, 2, -10, -100, 99, 101, 102, 103, 104, 105, 9, 3, 5, 7];

  function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let mark = true;
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // arr[j] = arr.splice(j + 1, 1, arr[j])[0];
          const a = arr[j];
          const b = arr[j + 1];
          arr[j + 1] = a;
          arr[j] = b;
          mark = false;
        }
      }
      if (mark) {
        break;
      }
    }
    return arr;
  }

  console.time("time");
  console.log(bubbleSort(arr));
  console.timeEnd("time");
})();
