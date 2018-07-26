;(function () {

    console.time('time');

    var arr = [1, 100, -99, 10, 22, 33, 0];

    function chooseSort (arr) {
        var len = arr.length;
        for (var i = 0; i < len; i += 1) {
            var minIdx = i;
            for (var j = i+1; j < len; j += 1) {
                if (arr[minIdx] > arr[j]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) arr[i] = arr.splice(minIdx, 1, arr[i])[0];
        }
        return arr;
    }

    console.log(chooseSort(arr));
    console.timeEnd('time');

})();