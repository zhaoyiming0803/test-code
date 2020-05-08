// 数组降维
~(function () {
  function toArray(arr) {
    const str = arr + "";
    return str.split(",");
  }
  console.log(toArray([1, 2, [4, 5], [0, 200, [3, 9, [7]]]]));
})();

~(function () {
  function toArray(arr) {
    let res = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        res = res.concat(toArray(item));
      } else {
        res.push(item);
      }
    });
    return res;
  }
  console.log(toArray([1, 2, [3, 4, [5, 6, [7, 8]]], { name: "zhangsan" }]));
  console.log(toArray([1, 2, [4, 5], [0, 200, [3, 9, [7]]]]));
})();
