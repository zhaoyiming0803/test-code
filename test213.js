~(function () {
  // 删除字符串中出现次数最少的字符
  const str = "sdfasfsewijojwesdm";

  function deleteLeastStr(str) {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      const sub = str[i];
      if (!map[sub]) {
        map[sub] = 1;
      } else {
        map[sub] += 1;
      }
    }

    // const min = Array.from(new Set(Object.values(map))).sort(
    //   (a, b) => a - b
    // )[0];

    const min = Math.min.apply(Math, Array.from(new Set(Object.values(map))));

    // let min = 0;
    // for (let key in map) {
    //   if (map[key] < min) {
    //     min = map[key];
    //   }
    // }

    // let min = 0;
    // Object.keys((key) => {
    //   if (map[key] < min) {
    //     min = map[key];
    //   }
    // });

    Object.keys(map).forEach((key) => {
      if (map[key] === min) {
        str = str.replace(new RegExp(key, "g"), ($0) => "");
      }
    });

    // for (let key in map) {
    //   if (map[key] === min) {
    //     str = str.replace(new RegExp(key, "g"), ($0) => "");
    //   }
    // }

    return str;

    // const arr = str.split("");
    // for (let key in map) {
    //   if (map[key] === min) {
    //     for (let i = 0; i < arr.length; i++) {
    //       if (arr[i] === map[key]) {
    //         arr.splice(i, 1);
    //       }
    //     }
    //   }
    // }
    // return arr.map((item) => item).join("");
  }
  console.time("delete");
  console.log(deleteLeastStr(str));
  console.timeEnd("delete");
})();
