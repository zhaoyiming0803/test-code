(function () {
  var arr1 = [4, 10, 6, 8, 9];
  // sort 方法不是纯函数，会修改原来的数据
  // sort 方法默认将数组每一项都转为字符串（调用对应的toString方法），然后再比较，所以出现以下结果
  console.log(arr1.sort()); // [ 10, 4, 6, 8, 9 ]
  console.log(arr1); // [ 10, 4, 6, 8, 9 ]

  console.log(arr1.sort((a, b) => a - b)); // [ 4, 6, 8, 9, 10 ]
  console.log(arr1.sort((a, b) => b - a)); // [ 10, 9, 8, 6, 4 ]
  console.log(arr1.sort(() => Math.random() - 0.5)); // 随机排序
})();
