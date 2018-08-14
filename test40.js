;(function () {
    
    var arr = [1, 2, 3, 4, 5, 6];

    Array.prototype._join = function (field) {
        var str = '';

        for (var i = 0, len = this.length; i < len; i += 1) {
            str += i === len - 1
                ? arr[i]
                : (arr[i] + field);
        }

        return str;
    }

    var str = arr._join('-');
    console.log(str);

})();