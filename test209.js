!(function () {
  function getMaxSuccessiveLength(arr) {
    const arrSet = new Set(arr);
    let res = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
      const v = arr[i];
      const hasPre = arrSet.has(v - 1);
      const hasNext = arrSet.has(v + 1);

      if (!hasPre && !hasNext) {
        continue;
      }

      if (hasPre) {
        let i = v - 1;
        temp.push(i, v);
        while (arrSet.has(--i)) {
          temp.unshift(i);
        }
      }

      if (hasNext) {
        let i = v + 1;
        if (hasPre) {
          temp.push(i);
        } else {
          temp.push(v, i);
        }
        while (arrSet.has(++i)) {
          temp.push(i);
        }
      }

      if (temp.length > res.length) {
        res = temp;
      }

      temp = [];
    }

    return res;
  }

  console.log(getMaxSuccessiveLength([20, 5, 8, 7, 9, 100, 2, 1, 3, 6, 10]));
  console.log(getMaxSuccessiveLength([4, 5, 3, 1, 2]));
  console.log(getMaxSuccessiveLength([8, 4, 5, 7, 3, 11, 13, 1, 2, 9, 6]));
})();
