;(function () {

    var arr = [1, 2];

    var num = 0;
    while (num < 18) {
        var len = arr.length - 1;
        arr.push(arr[len] + arr[len-1]);
        num += 1
    }

    console.log(arr);

})();