;(function () {
    
    var arr = [1, 2, 3, 4];

    Array.prototype._reduce = function (fn) {
        var res = this[0];

        for (var i = 1, len = this.length; i < len; i += 1) {
            res = fn(res, this[i]);
        }

        return res;
    }

    var sum = arr._reduce(function (a, b) {
        return a + b;
    });
    console.log(sum);

    var product = arr._reduce(function (a, b) {
        return a * b;
    });
    console.log(product);

})();