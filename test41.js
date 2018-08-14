;(function () {

    var str = '--1-2-3-4-5--6-78--99';

    String.prototype._split = function (field) {
        var arr = [];
        var pre = 0;
        var tmp = null;

        for (var i = 0, len = this.length; i < len; i += 1) {
            if (this[i] === field) {
                tmp = this.substring(pre, i);
                arr.push(tmp);
                pre = i + 1;
            }
        }

        if (pre <= len) {
            tmp = this.substring(pre, len);
            arr.push(tmp);
        }

        return arr;
    }

    var arr1 = str._split('-');
    console.log(arr1);

    var arr2 = str.split('-');
    console.log(arr2);

})();