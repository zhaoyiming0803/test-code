;(function () {

  var arr = [1, 2, 3, 1, 2,];

  function unique1 (arr) {
    return Array.from(new Set(arr));
  }

  function unique2 (arr) {
    var map = {};
    arr.forEach(item => {
      map[item] = true;
    });
    return Object.keys(map).map(item => item -= 0);
  }

  function unique3 (arr) {
    return arr.reduce((pre, cur) => {
      if (pre.indexOf(cur) === -1) {
        pre.push(cur);
      }
      return pre;
    }, []);
  }

  console.log(unique1(arr));
  console.log(unique2(arr));
  console.log(unique3(arr));

})();