;(function () {

    function Event () {
        this.eventList = {};
    }

    Event.prototype.emit = function () {
        var args = [].slice.call(arguments);
        var eventName = args[0];
        if (this.eventList[eventName] === undefined) {
            throw new Error(eventName + ' is undefined');
        }
        for (var i = 0, len = this.eventList[eventName].length; i < len; i += 1) {
            this.eventList[eventName][i].apply(this, args.splice(1));
        }
    };

    Event.prototype.on = function (eventName, callback) {
        if (this.eventList[eventName] === undefined) {
            this.eventList[eventName] = [];
        }
        this.eventList[eventName].push(callback);
    };

    var a = new Event();
    a.on('a', function (x, y) {
        console.log(x + y);
    });
    a.emit('a', 1, 2);

    var b = new Event();
    b.emit('b', 1, 2);

})();