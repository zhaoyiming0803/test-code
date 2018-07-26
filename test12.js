;(function () {

    var a = 0;
    var b = a > 5 && 3 || 4 && 5;
    console.log(b);

    console.log(this);

})();