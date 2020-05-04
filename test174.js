(function () {
  const str = "asdfgfweak";

  function getMaxSubstrByRecursive(str) {
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

  function getMaxSubstrByUnique(str) {
    let maxStr = "";
    for (let i = 0; i < str.length; i++) {
      const substr = str.slice(i);
      const substrLen = substr.length;
      const maxStrLen = maxStr.length;
      if (substrLen < maxStrLen) {
        return maxStr;
      }
      if (
        Array.from(new Set(substr)).length === substrLen &&
        substrLen > maxStrLen
      ) {
        maxStr = substr;
      }
    }
    return maxStr;
  }

  console.log(getMaxSubstrByRecursive(str));
  console.log(getMaxSubstrByUnique(str));
})();
