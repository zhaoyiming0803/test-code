;(function () {

    var str = '123456789876543212345678987654321';

    function getNumber (str, idx) {
        var res = 0;

        if (idx <= 9) {
            res = idx + 1;
            return res;
        }

        var quotient = Math.floor(idx / 8);
        var remainder = idx % 8;

        if (quotient % 2 === 0) {
            res = 2 + remainder - 1;
        } else {
            res = 8 - remainder + 1;
        }

        return res;
    }

    console.log(getNumber(str, 25));

})();