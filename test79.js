;(function () {

  var str = '00110011001';

  function getStrList (str) {
    var res = [];

    for (var i = 0; i < str.length; i += 1) {
      var matchedStr = match(str.slice(i));
      if (matchedStr) {
        res.push(matchedStr);
      }
    }
    
    return res;
  }

  function match (str) {
    var arr = [];
    var mark = true;
    
    for (var i = 0; i < str.length; i += 1) {
      var cur = str[i];

      if (arr.length === 0) {
        arr.push(cur);
        continue;
      }

      // 00110011
      if (arr.length % 2 !== 0 && cur === arr[arr.length - 1]) {
        arr.push(cur);
        continue;
      }

      if (mark) {
        mark = false;
        arr.push(cur);
      }
    }

    var str = arr.join('');
    var [first, second] = str.match(/0+|1+/g);
    if (
      str.length % 2 === 0 && 
      first && second && 
      first.length === second.length
    ) {
      return str;
    }
  }

  console.log(getStrList(str));

})();