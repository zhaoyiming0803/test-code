(function () {
  // 随机营运抽奖或洗牌
  var list = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
  ];

  console.log("start: ", list.length);

  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * list.length);
    console.log(list[random]);
    list[random] = list[list.length - 1];
    list.length--;
  }

  console.log("end: ", list.length);
})();
