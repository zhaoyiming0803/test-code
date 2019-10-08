;(function () {

	function selectionSorting (arr) {
		for (var i = 0; i < arr.length; i += 1) {
			var minIdx = i;
			for (var j = i + 1; j < arr.length; j += 1) {
				if (arr[minIdx] > arr[j]) {
					minIdx = j;
				}
			}
			if (i !== minIdx) {
				// arr[minIdx] = arr.splice(i, 1, arr[minIdx])[0];
				var minVal = arr[minIdx];
				var tmp = arr[i];
				arr[minIdx] = tmp;
				arr[i] = minVal;
			}
		}
		return arr;
	}

	console.time('time');
	console.log(selectionSorting([1, 100, -99, 10, 22, 33, 0]));
	console.timeEnd('time');

})();