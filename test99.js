;(function () {

  var arr = [1, 5, 3, 9, 4, 0, 2];

  var sum = 3;

  function findAdditionNumbers (arr, sum) {
    var result = [];

    var middle = Math.floor(arr.length / 2);

    for (var i = 0; i < middle; i++) {
      var index = arr.indexOf(sum - arr[i]);
      if (index >= 0) {
        result.push([arr[i], arr[index]]);
      }
    }

    return result;
  }

  console.log(findAdditionNumbers(arr, sum));

})();