;(function () {

    function diviceTo10 (num, base) {
        var str = num + '';
        var arr = str.split('').reverse();
        var sum = 0;

        for (var i = 0, len = arr.length; i < len; i += 1) {
            sum += (arr[i] * Math.pow(base, i));
        }

        return sum;

    }

    console.log(diviceTo10(12345, 8));

})();