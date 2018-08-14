;(function () {

    var arr = [1, 2, 3, 4, 5, {a: 1}];

    Array.prototype._reverse = function () {
        var newArr = [];
        var totalIdx = this.length - 1;

        for (var i = 0, len = Math.ceil(this.length / 2); i < len; i += 1) {
            var tmp = this[i];
            newArr[i] = this[totalIdx - i];
            newArr[totalIdx - i] = tmp;
        }

        return newArr;
    }

    var newArr = arr._reverse();
    console.log(newArr);

})();