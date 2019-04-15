;(function () {

	var arr = [1, 100, -99, 10, 22, 33, 0];

	function quickSort(arr) {
		if (arr.length <= 1) {
			return arr;
		}

		var left = [];
		var right = [];
		var middle = arr[0];

		for (var i = 1; i < arr.length; i += 1) {
			var cur = arr[i];

			if (cur <= middle) {
				left.push(cur);
			} else {
				right.push(cur);
			}
		}

		var _left = quickSort(left);
		var _right = quickSort(right);

		return _left.concat(middle, _right);
	}

	console.time('time');
	var res = quickSort(arr);
	console.timeEnd('time');
	console.log(res);

})();