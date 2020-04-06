(function () {
  const arr = [1, 2, [3, 4, [5]], 6];

  function reduceArr(arr) {
    return arr.reduce((pre, next) => pre.concat(next), []);
  }

  console.log(reduceArr(arr));

  function normalizeArr(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        res.push(arr[i]);
        continue;
      }
      res = res.concat(normalizeArr(arr[i]));
    }
    return res;
  }

  console.log(normalizeArr(arr));
})();
