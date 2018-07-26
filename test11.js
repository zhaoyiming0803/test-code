;(function () {

    var obj1 = {
        name: 'zhangsan',
        age: 18
    };

    var obj2 = {
        name: 'lisi',
        sex: 'man',
        work: [1, 2, 3],
        love: {
            item1: '1',
            item2: '2',
            item3: '3',
            item4: [0, 1, 2, 3]
        }
    };

    Object.prototype.deepCopy = function (target) {
        for (var prop in target) {
            if (this[prop]) continue;
            if (typeof target[prop] !== 'object') {
                this[prop] = target[prop];
                continue;
            }
            var type = Object.prototype.toString.call(target[prop]);
            this[prop] = type === '[object Array]'
                ? []
                : type === '[object Object]'
                ? {}
                : function () {};
            this[prop].deepCopy(target[prop]);
        }
    }

    obj1.deepCopy(obj2);
    obj1.name = 'wangwu';
    obj1.work[2] = 'haha';
    obj1.love.item4.push(4);
    console.log(obj1);
    console.log(obj2);

})();