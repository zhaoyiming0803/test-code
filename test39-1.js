;(function () {

    console.time('time');

    var arr = [];

    for (var i = 0; i <= 1000000; i += 1) {
        arr.push(i);
    }

    console.log(arr.includes(500000));

    console.timeEnd('time'); // 22ms-33ms

})();