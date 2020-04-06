(function () {
  const a = [1, 2, 3];
  const b = [9, 0, 3, 5, 1];

  const setA = new Set(a);

  // const res = [];
  // b.forEach((v, k) => {
  //   if (setA.has(v)) {
  //     res.push(v);
  //   }
  // });

  // console.log(res);

  const res = b.filter((v) => setA.has(v));
  console.log(res);
})();
