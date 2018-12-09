;(function () {

    function getCurMonth () {
        var date = new Date();
        return date.getMonth() + 1;
    }
    
    // 某月共有几天
    function getDays (curYeay, curMonth) {
        // 此处构造的日期为下个月的第0天，天数索引从1开始，第0天即代表上个月的最后一天
        var day = new Date(curYeay, curMonth, 0);
        return day.getDate();
    };
    
    // 本月第一天是周几
    function getWeek (year, month){
        var date = new Date(year, month - 1, 1);
        return date.getDay();
    }
    
    console.log(getCurMonth());
    var curMonth = getCurMonth();
    console.log(getDays(2018, curMonth));
    console.log(getWeek(2018, curMonth));

})();