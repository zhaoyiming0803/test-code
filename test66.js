;(function () {
  /**
   * 一个字符串由任意多个字母组成
   * 找出所有连续的（最少连续出现2次）子字符串
   */
  var str = 'abbcdeeeeedefdd';

  var strArr = str.split('');
  var arr = [
    [strArr[0]]
  ];

  for (var i = 1; i < strArr.length; i += 1) {
    var substring = strArr[i];
    if (arr[arr.length - 1].includes(substring)) {
      arr[arr.length - 1].push(substring);
    } else {
      arr.push([substring]);
    }
  }

  console.log(arr);

})();