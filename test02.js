(function () {
  function fn() {
    var a = 1;
    return function innerFn() {
      a += 1;
      return a;
    };
  }

  const innerFn = fn();
  console.log(innerFn()); // 2
  console.log(innerFn()); // 3
  console.log(innerFn()); // 4
  console.log(innerFn()); // 5
  console.log(innerFn()); // 6
})();

(function () {
  const Person = (function () {
    let instance = null;

    function PersonClass(name, age) {
      this.name = name;
      this.age = age;
    }

    return function (name, age) {
      if (!instance) {
        instance = new PersonClass(name, age);
      }
      return instance;
    };
  })();

  const p1 = new Person("zhangsan", 19);
  const p2 = new Person("lisi", 18);
  const p3 = new Person("wangwu", 20);

  console.log(p1.name); // zhangsan
  console.log(p2.name); // zhangsan
  console.log(p3.name); // zhangsan
})();
