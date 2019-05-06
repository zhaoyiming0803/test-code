;(function () {

	var tree = [{
		id: 1,
		parent_id: 0,
		checked: false,
		children: [{
				id: 2,
				parent_id: 1,
				checked: false
			},
			{
				id: 3,
				parent_id: 1,
				checked: false,
				children: [{
					id: 4,
					parent_id: 3,
					checked: true
				}]
			}
		]
	}];

	function handleParent(parent, arr) {
		for (var i = 0, len = arr.length; i < len; i += 1) {
			var cur = arr[i];
			var child = cur.children;
			if (Array.isArray(child) && child.length) {
				handleParent(cur, child);
			}
			if (cur.checked === true && parent) {
				parent.checked = true;
			}
		}
	}

	handleParent(null, tree);
	console.log(tree);

})();