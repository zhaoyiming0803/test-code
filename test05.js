;(function () {

    var arr = [0, 1, 2, 3, 4, 5, -1, 100, 101, 102, 104, 103];

    function insertSort (arr) {
        var newArr = [arr[0]];
        for (var i = 1; i < arr.length - 1; i += 1) {
            if (arr[i] < newArr[0]) {
                newArr.unshift(arr[i]);
                continue;
            }
            for (var j = newArr.length - 1; j >= 0; j += 1) {
                if (arr[i] > newArr[j]) {
                    var tmp = newArr.splice(j+1);
                    newArr.push(arr[i]);
                    newArr = newArr.concat(tmp);
                    break;
                }
            }
        }
        return newArr;
    }

    console.log(insertSort(arr));

})();