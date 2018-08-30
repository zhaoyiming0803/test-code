;(function () {

    Function.prototype._bind = function (target) {
        var _this = this;
        return function () {
            return _this.call(target);
        }
    };

    var obj1 = {
        name: 'obj1',
        showName: function () {
            return this.name;
        }
    };

    var obj2 = {
        name: 'obj2',
        showName: function () {
            return this.name;
        }._bind(obj1)
    };

    console.log(obj1.showName());
    console.log(obj2.showName());


})();