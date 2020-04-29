~(function () {
  const obj = {
    a: {
      b: ["c", { d: "haha, this is dddddd" }],
    },
  };

  function getValueByReduce(obj, props) {
    return props.reduce((a, b) => (a && a[b]) || null, obj);
  }

  console.log(getValueByReduce(obj, ["a", "b", 1, "d"])); // haha, this is dddddd
  console.log(getValueByReduce(obj, ["a", "c", "d", "e"])); // null
})();
