;(function () {

    var a = 0;
    var b = a++ && 5;
    console.log(a); // 1
    console.log(b); // 0

    var c = 0;
    var d = c++ || 3;
    console.log(c); // 1
    console.log(d); // 3

    var e = 0;
    var f = ++e && 5 || 3;
    console.log(e); // 1
    console.log(f); // 5

    var g = 0;
    var h = g > 0 && g++ || 3;
    console.log(g); // 0
    console.log(h); // 3


})();