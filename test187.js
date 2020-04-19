(function () {
  // 通过 slice 实现纯基本类型数组的深拷贝
  var arr1 = [0, 1, 2, 3, 4, { a: 100 }];
  var arr2 = arr1.slice(0);
  arr2[0] = 100;
  arr2[arr2.length - 1].a = 200;
  console.log(arr1); //  0, 1, 2, 3, 4, { a: 200 } ]
  console.log(arr2); // [ 100, 1, 2, 3, 4, { a: 200 } ]
})();

(function () {
  // 如果 slice 方法的参数中有负数，则用数组长度加该数来确定相应的位置
  // 如果结束位置小于起始位置，则返回空数组
  var arr1 = [0, 1, 2, 3, 4, 5, 6];

  var arr2 = arr1.slice(2, -2);
  var arr3 = arr1.slice(2, -2 + arr1.length);
  console.log(arr2); // [ 2, 3, 4 ]
  console.log(arr3); // [ 2, 3, 4 ]

  var arr4 = arr1.slice(-4, -2);
  var arr5 = arr1.slice(-4 + arr1.length, -2 + arr1.length);
  console.log(arr4); // [ 3, 4 ]
  console.log(arr5); // [ 3, 4 ]

  var arr6 = arr1.slice(-1, -4);
  console.log(arr6); // []
})();
