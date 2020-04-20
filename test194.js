(function () {
  function SuperType(name) {
    this.name = name;
  }

  SuperType.prototype.getName = function getName() {
    return this.name;
  };

  function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
  }

  SubType.prototype = new SuperType();
  SubType.prototype.constructor = SubType;

  const a = new SubType("zhangsan", 18);
  const b = new SubType("lisi", 19);

  console.log(a.getName());
  console.log(b.getName());

  SubType.prototype.getAge = function getAge() {
    return this.age;
  };

  console.log(a.getAge());
  console.log(b.getAge());
  console.log(SuperType.prototype.getAge); // undefined
})();
