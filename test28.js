;(function () {

	console.log('script start');

	function isArray (field) {
		return Object.prototype.toString.call(field) === '[object Array]';
	}

	function isFunc (field) {
		return Object.prototype.toString.call(field) === '[object Function]';
	}

	function forEachAsync (arr, callback) {
		if (!isArray(arr)) {
			throw new Error('arr must be an Array');
		}

		if (!isFunc(callback)) {
			throw new Error('callback must be a Function');
		}

		var timer = setInterval(function () {
			if (arr.length === 0) {
				clearInterval(timer);
				timer = null;
			} else {
				callback(arr.shift());
			}
		}, 4);
	}

	var arr = [1, 2, 3, 4, 5];
	forEachAsync(arr, function (item) {
		console.log(item);
	});

	console.log('script end');

})();