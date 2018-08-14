;(function () {

    var arr = [1, 2, 3, 4, 5, 10, 9, 100, 99, 67, 68, 69];

    function compare (a, b) {
        return Math.random() < 0.5;
    }

    arr.sort(compare);
    console.log(arr);
    
})();