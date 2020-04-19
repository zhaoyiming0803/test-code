(function () {
  // 通过 slice 实现纯基本类型数组的深拷贝
  var arr1 = [0, 1, 2, 3, 4, { a: 100 }];
  var arr2 = arr1.slice(0);
  arr2[0] = 100;
  arr2[arr2.length - 1].a = 200;
  console.log(arr1); //  0, 1, 2, 3, 4, { a: 200 } ]
  console.log(arr2); // [ 100, 1, 2, 3, 4, { a: 200 } ]
})();
