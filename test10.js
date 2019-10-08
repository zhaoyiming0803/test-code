;(function () {

	function quickSort (arr) {
		if (arr.length <= 1) {
			return arr;
		}

		var left = [];
		var right = [];
		var middle = arr[0];

		for (var i = 1; i < arr.length; i += 1) {
			var cur = arr[i];
			if (cur <= middle) left.push(cur);
			else right.push(cur);
		}

		console.log('left', left);
		var _left = quickSort(left);
		console.log('_left', _left);

		console.log('right', right);
		var _right = quickSort(right);
		console.log('_right', _right);

		console.log('-------');
		return _left.concat(middle, _right);
	}

	console.time('time');
	var res = quickSort([22, 100, -99, 10, 1, 33, 0]);
	console.timeEnd('time');
	console.log(res);

})();