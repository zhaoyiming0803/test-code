;(function () {

  var categoryList = [
    { id: 1, parent_id: 0, name: '衣服' },
    { id: 2, parent_id: 1, name: '上衣' },
    { id: 3, parent_id: 2, name: '衬衫' },
    { id: 4, parent_id: 0, name: '食品' },
    { id: 5, parent_id: 4, name: '吃的' },
    { id: 6, parent_id: 4, name: '喝的' },
    { id: 7, parent_id: 1, name: '裤子' },
    { id: 8, parent_id: 7, name: '牛仔裤' },
    { id: 9, parent_id: 3, name: '白色衬衫' },
    { id: 10, parent_id: 3, name: '黑色色衬衫' }
  ];

  function findSpecialCategorys (id, arr, isSelf) {
    var res = [];
    for (var i = 0; i < arr.length; i += 1) {
      var cur = arr[i];
      var curId = cur.id;
      if (!isSelf && cur.parent_id === id || isSelf && curId === id) {
        res = res.concat(curId, findSpecialCategorys(curId, arr, false));
      }
    }
    return res;
  }

  var specialCategorys = findSpecialCategorys(2, categoryList, true);
  console.log(specialCategorys);

  var rightfulCategorys = categoryList.filter(category => !specialCategorys.includes(category.id));
  console.log(rightfulCategorys);

  


  function delCategorys (id, arr, isSelf) {
    for (var i = 0; i < arr.length; i += 1) {
      if (isSelf && arr[i].id === id || !isSelf && arr[i].parent_id === id) {
        delCategorys(arr[i].id, arr, false);
        arr.splice(i, 1, {});
      }
    }
  }

  // delCategorys(2, categoryList, true);
  // categoryList = categoryList.filter(category => category.id);
  // console.log(categoryList);

})();