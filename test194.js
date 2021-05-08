(function () {
  /**
   * combination inheritance
   * 调用了两个父类，所以效率不高
   * 而且子类的原型上会有很多不必要的父类的私有属性
   */

  function SuperType(name) {
    this.name = name;
  }

  SuperType.prototype.getName = function getName() {
    return this.name;
  }

  SuperType.prototype.test = {}

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

  SubType.prototype.test.a = 123
  console.log(a.test)
})();
