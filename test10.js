(function () {
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = arr[0];
    const left = [];
    const right = [];
    arr.slice(1).forEach((item) => {
      if (item >= middle) right.push(item);
      else left.push(item);
    });

    const _left = quickSort(left);
    const _right = quickSort(right);

    return _left.concat(middle, _right);
  }

  console.time("time");
  const res = quickSort([
    1,
    2,
    -10,
    -100,
    99,
    101,
    102,
    103,
    104,
    105,
    9,
    3,
    5,
    7,
  ]);
  console.timeEnd("time");
  console.log(res);
})();
