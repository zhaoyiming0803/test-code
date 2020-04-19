(function () {
  var arr1 = [0, 1, 2, { a: 100 }];
  var arr2 = arr1.concat([3, 4]);
  console.log(arr1); // [0, 1, 2];
  console.log(arr2); // [ 0, 1, 2, 3, 4 ]

  // 通过 concat 实现纯基本类型数组的深拷贝
  var arr3 = arr1.concat();
  arr3[0] = 100;
  arr3[3].a = 200;
  console.log(arr1); // [ 0, 1, 2, { a: 200 } ]
  console.log(arr3); // [ 100, 1, 2, { a: 200 } ]
})();
