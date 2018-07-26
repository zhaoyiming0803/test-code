;(function () {

    function isFunc (func) {
        return Object.prototype.toString.call(func) === '[object Function]';
    }

    function Event () {
        this.eventList = {};
    }

    Event.prototype.on = function (eventName, callback) {
        if (this.eventList[eventName] === undefined) {
            this.eventList[eventName] = [];
        }
        if (!isFunc(callback)) {
            throw new Error('callback must be a function');
        }
        this.eventList[eventName].push(callback);
    }

    Event.prototype.emit = function (eventName) {
        if (this.eventList[eventName] === undefined) {
            throw new Error('[' + eventName + '] is not defined');
        }
        var args = [].slice.call(arguments, 1);
        for (var i = 0; i < this.eventList[eventName].length; i += 1) {
            this.eventList[eventName][i].apply(this, args);
        }
    }

    var a = new Event();
    a.on('msg', function (a, b, c) {
        console.log(a, b, c);
    });
    a.emit('msg', 1, 2, 3);

})();