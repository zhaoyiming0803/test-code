(function () {
  function* gen() {
    const a = yield 1;
    const b = yield 2;
    const c = yield 3;
  }
  for (let value of gen()) {
    console.log(value); // 1 2 3
  }
})();

(function () {
  const arr = [0, 1, 2, 3];
  for (let value of arr) {
    console.log(value);
  }
})();

(function () {
  const set = new Set([11, 22, 33, 44]);
  for (let value of set) {
    console.log(value);
  }
})();

(function () {
  const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  for (let [key, value] of map) {
    console.log(`${key}=${value}`);
  }
  console.log(map.get("a"));
})();
