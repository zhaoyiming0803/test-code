;(function () {

    var arr = [1, 100, -99, 87, 101, 9];

    function getMaxVal (arr) {
        return Math.max.apply(Math, arr);
    }

    function getMinVal (arr) {
        return Math.min.apply(Math, arr);
    }

    function getMaxIdx (arr) {
        var maxIdx = 0;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[maxIdx] < arr[i]) {
                maxIdx = i;
            }
        }
        return maxIdx;
    }

    function getMinIdx (arr) {
        var minIdx = 0;
        for (var i = 1; i < arr.length; i += 1) {
            if (arr[minIdx] > arr[i]) {
                minIdx = i;
            }
        }
        return minIdx;
    }

    console.log(getMaxVal(arr));
    console.log(getMinVal(arr));
    console.log(getMaxIdx(arr));
    console.log(getMinIdx(arr));

})();