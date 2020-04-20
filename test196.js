(function () {
  /**
   * 寄生组合继承
   * 相比组合继承，父类构造函数只调用了一次
   * 但是：在子类原型上添加或修改方法，同样父类原型上也会被添加或修改
   * 所以：给子类添加额外的属性或方法，可以考虑在实例对象上添加，而不是原型对象上
   * 各种继承方式各有优缺点
   */

  function inhitance(Sub, Super) {
    const prototype = Object(Super.prototype);
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
