(function () {
  /**
   * 寄生组合继承
   * 相比组合继承，父类构造函数只调用了一次
   */

  function inhitance(Sub, Super) {
    const prototype = Object.create(Super.prototype);
    prototype.constructor = Sub;
    Sub.prototype = prototype;
  }

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

  inhitance(SubType, SuperType);

  const a = new SubType("zhangsan", 18);
  console.log(a.getName()); // zhangsan

  SubType.prototype.getAge = function getAge() {
    return this.age;
  };

  console.log(a.getAge()); // 18
  console.log(SuperType.prototype.getAge); // [Function: getAge]
})();
