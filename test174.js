(function () {
  const str = "asdfgfweak";

  function maxSubstr(str) {
    const map = new Map();
    let maxStr = "";
    const length = str.length;

    handler(0);

    function handler(start) {
      for (let i = start; i < length; i++) {
        if (!map.has(str[i])) {
          map.set(str[i], true);
        } else {
          const temp = str.slice(start, i);
          if (maxStr.length < temp.length) {
            maxStr = temp;
          }
          map.clear();
          handler(start + 1);
          break;
        }
      }
    }

    const remnant = Array.from(map.keys()).join("");
    if (maxStr.length < remnant.length) {
      maxStr = remnant;
    }

    return maxStr;
  }

  console.log(maxSubstr(str));
})();
