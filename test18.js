;(function () {

    var arr = [1, 2, 1, 2, 1, 4, 5, 100, 99, 100, '100', 2, 3, 6, 7];

    function compare (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    }

    function unique (arr) {
        var sortArr = arr.sort(compare);
        var newArr = [sortArr[0]];
        for (var i = 1; i < sortArr.length; i += 1) {
            if (sortArr[i] !== newArr[newArr.length-1]) {
                newArr.push(sortArr[i]);
            }
        }
        return newArr;

    }

    console.log(unique(arr));

})();