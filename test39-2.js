;(function () {

    console.time('time');

    var arr = [];

    for (var i = 0; i <= 1000000; i += 1) {
        arr.push(i);
    }

    for (var i = 0, len = arr.length; i < len; i += 1) {
        if (i === 500000) {
            console.log(true);
            break;
        }
    }

    console.timeEnd('time'); // 23ms-26ms，偶尔会超过30ms

})();