(function () {
  // binary search
  // 二分查找的数组必须是有序列表
  var arr = [1, 2, 3, 100, 4, 8, 101, 54, 93, 27, 65];

  // function search (arr, target) {
  //   if (arr.length <= 1) {
  //     if (target === arr[0]) return target
  //     return
  //   }
  //   const middleIndex = Math.floor(arr.length / 2)
  //   if (target > arr[middleIndex]) {
  //     return search(arr.slice(middleIndex), target)
  //   } else if (target < arr[middleIndex]) {
  //     return search(arr.slice(0, middleIndex), target)
  //   } else {
  //     return target
  //   }
  // }

  function search(arr, target) {
    let middleIndex;
    while ((middleIndex = Math.ceil(arr.length / 2))) {
      if (arr.length === 0) {
        return;
      }
      if (target > arr[middleIndex]) {
        arr = arr.slice(middleIndex);
      } else if (target < arr[middleIndex]) {
        arr = arr.slice(0, middleIndex);
      } else {
        return target;
      }
    }
  }

  console.log(
    search(
      arr.sort((a, b) => a - b),
      8
    )
  );
})();
