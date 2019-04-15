;(function () {

	function isFunc(func) {
		return Object.prototype.toString.call(func) === '[object Function]';
	}

	function Event() {
		this.eventMap = {};
	}

	Event.prototype.on = function (eventName, callback) {
		if (this.eventMap[eventName] === undefined) {
			this.eventMap[eventName] = [];
		}

		if (!isFunc(callback)) {
			throw new Error('callback must be a function');
		}
		
		this.eventMap[eventName].push(callback);
	}

	Event.prototype.emit = function (eventName) {
		var eventCbs = this.eventMap[eventName];

		if (eventCbs === undefined) {
			throw new Error('[' + eventName + '] is not defined');
		}

		var args = [].slice.call(arguments, 1);
		for (var i = 0; i < eventCbs.length; i += 1) {
			eventCbs[i].apply(this, args);
		}
	}

	var a = new Event();
	a.on('msg', function (a, b, c) {
		console.log(a, b, c);
	});
	a.emit('msg', 1, 2, 3);

})();