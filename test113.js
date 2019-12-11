;(function () {

  function findValue (arr, target) {
    for (let i = 0, len = arr.length, j = arr[len - 1].length; i < len && j >= 0;) {
      if (target === arr[i][j]) {
        return true;
      } else if (target > arr[i][j]) {
        ++i;
      } else {
        --j;
      }
    }
    return false;
  }

  function createArr () {
    const arr = [];
    for (let i = 0; i < 3; ++i) {
      arr.push([]);
      for (let j = i; j < i + 5; ++j) {
        arr[i].push(j);
      }
    }
    return arr;
  }

  console.log(findValue(createArr(), 7));

})();