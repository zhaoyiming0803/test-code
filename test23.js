;(function () {

    var target = 34;

    function find (min, max) {
        var middle = Math.floor((min + max) / 2);
        return middle > target
            ? find(min, middle)
            : middle < target
                ? find(middle, max)
                : middle;
    }

    console.log(find(0, 100));

})();