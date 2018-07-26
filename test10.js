;(function () {

    console.time('time');

    var arr = [1, 100, -99, 10, 22, 33, 0];

    function quickSort (arr) {
        if (arr.length <= 1) return arr;
        var left = [];
        var right = [];
        var middle = arr[0];
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[i] <= middle) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        var _left = quickSort(left);
        var _right = quickSort(right);
        return _left.concat(middle, _right);
    }

    console.log(quickSort(arr));
    console.timeEnd('time')

})();