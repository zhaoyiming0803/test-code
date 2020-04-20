(function () {
  /**
   * 寄生式继承
   * 实际上是通过封装一个浅拷贝的函数，给对象添加属性和方法，属性名和函数名很容易冲突和覆盖，而且不能做到复用，所以效率低下
   */
  function parasiticInheritance(original) {
    const clone = Object(original);
    clone.getName = function getName() {
      return this.name;
    };
    return clone;
  }

  const person = {
    name: "zhangsan",
    age: 18,
  };

  var clone = parasiticInheritance(person);
  console.log(clone.getName()); // zhangsan

  clone.getAge = function getAge() {
    return this.age;
  };

  console.log(clone.getAge()); // 18
  console.log(person.getAge()); // 18
})();
