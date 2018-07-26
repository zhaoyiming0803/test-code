;(function () {

    function fn1 () {
        var a = 1;
        return function () {
            a += 1;
            return a;
        }
    }

    fn1()();

})();