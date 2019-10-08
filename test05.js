; (function () {

	function insertSort(arr) {
		var res = [arr[0]];

		for (var i = 1; i < arr.length; i += 1) {
			if (arr[i] < res[0]) {
				res.unshift(arr[i]);
				continue;
			}

			for (var j = res.length - 1; j >= 0; j -= 1) {
				if (arr[i] > res[j]) {
					// var tmp = res.splice(j + 1);
					// res.push(arr[i]);
					// res = res.concat(tmp);
					res.splice(j + 1, 0, arr[i]);
					break;
				}
			}
		}

		return res;
	}

	console.log(insertSort([0, 1, 2, 3, 4, 5, -1, 100, 101, 102, 104, 103]));

})();