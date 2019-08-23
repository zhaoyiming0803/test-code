;(function () {

	function getCurMonth () {
		var date = new Date();
		return date.getMonth() + 1;
	}

	// 某月共有几天
	function getDate (curYeay, curMonth) {
		// 此处构造的日期为下个月的第0天，天数索引从1开始，第0天即代表上个月的最后一天
		var date = new Date(curYeay, curMonth, 0);
		return date.getDate();
	};

	// 本月第一天是周几
	function getDay (year, month) {
		var date = new Date(year, month - 1, 1);
		return date.getDay();
	}

	var curMonth = getCurMonth();
	console.log(curMonth);
	console.log(getDate(2019, curMonth));
	console.log(getDay(2019, curMonth));

})();