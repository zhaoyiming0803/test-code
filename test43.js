;(function () {

    function diviceByBase (num, base) {
        var arr = [];
        var str = '';
        var rem = 0;
        var baseStr = '0123456789ABCDEF';

        while (num !== 0) {
            rem = num % base;
            arr.push(baseStr[rem]);
            num = Math.floor(num / base);
        }

        return arr.reverse().join('');
    }

    console.log(diviceByBase(2, 2));

})();
