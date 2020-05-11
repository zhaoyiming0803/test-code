~(function () {
  function findByReduce(obj, str) {
    return str.split(".").reduce((obj, key) => {
      return obj[key];
    }, obj);
  }

  function findByForEach(obj, str) {
    let res = obj;
    str.split(".").forEach((key) => {
      res = res[key];
    });
    return res;
  }

  console.log(findByReduce({ a: { b: { c: 1 } } }, "a.b.c"));
  console.log(findByForEach({ a: { b: { c: 1 } } }, "a.b.c"));
})();
