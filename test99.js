(function () {
  var arr = [1, 2, 3, 9, 4, 0, 5];

  var sum = 3;

  function findAdditionNumbers(arr, sum) {
    // var result = [];
    // var middle = Math.floor(arr.length / 2);
    // for (var i = 0; i < middle; i++) {
    //   var index = arr.indexOf(sum - arr[i]);
    //   if (
    //     index >= 0 &&
    //     result
    //       .toString()
    //       .split(",")
    //       .indexOf(arr[index] + "") === -1
    //   ) {
    //     result.push([arr[i], arr[index]]);
    //   }
    // }
    // return result;

    const map = new Map();
    const set = new Set(arr);
    arr.forEach((v1) => {
      const v2 = sum - v1;
      if (set.has(v2) && !map.has(v1 + "," + v2) && !map.has(v2 + "," + v1)) {
        map.set(v1 + "," + v2, true);
      }
    });
    return Array.from(map.keys()).map((item) =>
      item.split(",").map((item) => +item)
    );
  }

  console.log(findAdditionNumbers(arr, sum));
})();
