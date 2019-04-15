;(function () {

    var arr = [
      [1, 2, 3, 4],
      ['a', 'b', 'c'],
      ['A', 'B', 'C', 'D']
    ];
  
    function combineArrayChildren (arr) {
      var res = [''];
  
      for (var i = 0; i < arr.length; i += 1) {
        res = combineArray(res, arr[i]);
      }
  
      return res;
    }
  
    function combineArray (arr1, arr2) {
      var res = [];
  
      for (var i = 0; i < arr1.length; i += 1) {
        for (var j = 0; j < arr2.length; j += 1) {
          res.push(arr1[i] + '' + arr2[j]);
        }
      }
  
      return res;
    }
  
    console.log(combineArrayChildren(arr));
  
  })();