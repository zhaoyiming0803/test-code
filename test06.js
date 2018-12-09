;(function () {
    
    function fn1 (fn2) {
        return fn2();
    }

    function fn2 () {
        return 123;
    }

    console.log(fn1(fn2));

})();