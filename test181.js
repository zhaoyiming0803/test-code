(function () {
  // label 语句，参考 JavaScript 高级程序设计第 58-59 页
  var num = 0;
  outermost: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i === 5 && j === 5) {
        break outermost;
      }
      num++;
    }
  }
  console.log(num); // 55 本来应该等于 100
})();

(function () {
  var num = 0;
  outermost: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i === 5 && j === 5) {
        continue outermost;
      }
    }
    num++;
  }
  console.log(num); // 9 本来应该等于 10
})();
