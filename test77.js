;
(function () {
	// jquery serialize params
	// https://github.com/jquery/jquery/blob/master/src/serialize.js
	function isPlainObject(field) {
		return Object.prototype.toString.call(field) === '[object Object]';
	}

	function buildURL(url, params) {
		var hashIndex = url.indexOf('#');
		if (hashIndex > -1) {
			url = url.substring(0, hashIndex);
		}
		if (!isPlainObject(params)) {
			return url;
		}
		var serializedParams = [];
		var add = function (key, val) {
			val = typeof val === 'function' ?
				val() :
				val;
			var serializedParam = encodeURIComponent(key) +
				'=' +
				(!val ? '' : encodeURIComponent(val));
			serializedParams.push(serializedParam);
		};
		Object.keys(params).forEach(function (key) {
			buildParam(key, params[key], add);
		});
		url += (url.indexOf('?') ? '&' : '?') + serializedParams.join('&');
		return url;
	}

	function buildParam(key, val, add) {
		if (Array.isArray(val)) {
			val.forEach(function (v, k) {
				buildParam(key + "[" + (typeof v === 'object' && v !== null ? k : '') + "]", v, add);
			});
		} else if (isPlainObject(val)) {
			Object.keys(val).forEach(function (k) {
				buildParam(key + "[" + k + "]", val[k], add);
			});
		} else {
			add(key, val);
		}
	}
	console.log(buildURL('http://www.baidu.com?a=3#/sf', {
		a: 1,
		b: {
			pwd: 123
		},
		c: [1, new Date(), {
				d: 1,
				e: 2
			},
			[1, [2, [100]]], {
				f: 'f'
			}
		]
	}));
})();