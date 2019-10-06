;(function () {

	// pre 		它是上一次调用回调时返回的结果，每次调用的结果都会给pre
	// cur 		当前的元素
	// index 	当前的索引
	// arr 		循环的数组
	// reduce 第二个参数表示 pre 的初始值
	// test35.js

	// 求和
	var sum = [1, 2, 3].reduce(function (pre, cur, index, arr) {
		return pre + cur;
	}, 0);
	console.log(sum);

	// 在数据每个元素的左右都插入一个空 JSON
	var res = [
		{ name: 'zhangsan' },
		{ name: 'lisi' },
		{ name: 'wangwu' },
		{ name: 'zhaoliu' }
	].reduce(function (pre, cur, index, arr) {
		return pre.concat(cur, [{}]);
	}, [{}]);
	console.log(res);

	// 二维数组转为一维数组，结合 ES6 箭头函数，代码会更简洁
	var arr = [[1, 2], [3, 4], [9, 8], [5, 6]].reduce((pre, cur, index, arr) => pre.concat(cur), []);
	console.log(arr);

	// 计算数组中每个元素出现的次数
	var counts = [1, 2, 5, 1, 2, 6, 100, 101, 2, 3, 3, 100, 5].reduce(function (pre, cur, index, arr) {
		if (pre[cur] === undefined) {
			pre[cur] = 1;
		} else {
			pre[cur] += 1;
		}
		return pre;
	}, {});
	console.log(counts);

})();