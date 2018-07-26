;(function () {

    var arr = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        ['A', 'B', 'C', 'D']
    ];

    function extract (arr) {
        var newArr = [''];
        for (var i = 0; i < arr.length; i += 1) {
            newArr = fn(newArr, arr[i]);
        }
        return newArr;
    }

    function fn (left, right) {
        var arr = [];
        for (var i = 0; i < right.length; i += 1) {
            for (var j = 0; j < left.length; j += 1) {
                var tmp = left[j] + '' + right[i];
                arr.push(tmp);
            }
        }
        return arr;
    }

    console.log(extract(arr));

})();