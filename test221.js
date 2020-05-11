~(function () {
  const str = "jwoejaadijfoajojaaoijoweoajwejorwkepa";

  function findStrNumberByWhile(str, substr) {
    const arr = [];
    let index = str.indexOf(substr, 0);
    while (index >= 0) {
      arr.push(index);
      index = str.indexOf(substr, index + 1);
    }
    return arr;
  }

  function findStrNumberByFor(str, substr) {
    const arr = [];
    let index = 0;
    for (let i = 0; i < str.length; i = index + 1) {
      index = str.indexOf(substr, i);
      if (index !== -1) {
        arr.push(index);
      }
    }
    return arr;
  }

  console.log(findStrNumberByWhile(str, "a"));
  console.log(findStrNumberByFor(str, "a"));
})();
