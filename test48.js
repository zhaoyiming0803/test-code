;(function () {

    var price = ['一等奖', '二等奖', '三等奖', '四等奖', '五等奖', '明日再来'];

    var arr = [
        [0, '0.01%'],
        ['0.01%', '0.02%'],
        ['0.02%', '0.1%'],   
        ['0.1%',  '16%'],
        ['16%', '83.87%'],
        ['83.87%', '100%']
    ];

    function computeChance (price, arr) {
        var random = Math.random();
        var res = -1;
        for (var i = 0; i < arr.length; i += 1) {
            if (random >= parseFloat(arr[i][0])/100 && random < parseFloat(arr[i][1])/100) {
                res = i;
                break;
            }
        }
        console.log(random);
        return res;
    }

    setInterval(function () {
        console.log('恭喜您获得：' + price[computeChance(price, arr)]);
    }, 1000);
    
})();