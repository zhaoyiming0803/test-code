~(function () {
  // 删除字符串中出现次数最少的字符
  const str = "sdfasfsewijojwesdm";

  function deleteLeastStr(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
        map[str[i]] = 1;
      } else {
        map[str[i]] += 1;
      }
    }

    // const min = Array.from(new Set(Object.values(map))).sort(
    //   (a, b) => a - b
    // )[0];

    const min = Math.min.apply(Math, Array.from(new Set(Object.values(map))));

    for (let key in map) {
      if (map[key] === min) {
        str = str.replace(new RegExp(key, "g"), ($0) => "");
      }
    }
    return str;
  }
  console.time("delete");
  console.log(deleteLeastStr(str));
  console.timeEnd("delete");
})();
