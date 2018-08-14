;(function () {

    var str = '每一段路都是一种领悟，每一段路都荆棘密布！';

    String.prototype._find = function (str) {
        var res = {
            num: 0, // 当前字符在整个字符串中出现了几次
            idxs: [] // 分别出现在哪几个位置
        };
        
        var i = 0;
        var idx = this.indexOf(str, i);

        while (idx > -1) {
            res.num += 1;
            res.idxs.push(idx);
            i = idx + 1;
            idx = this.indexOf(str, i);
        }

        return res;
    };

    console.log(str._find('一'));
    
})();