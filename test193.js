(function () {
  // JavaScript高级程序设计 - 156页
  function Person() {}

  var person = new Person();

  Person.prototype = {
    name: "zhangsan",
    age: 18,
  };

  console.log(person.name); // undefined
})();

(function () {
  function Person() {}

  Person.prototype = {
    name: "zhangsan",
    age: 18,
  };

  var person = new Person();

  console.log(person.name); // zhangsan
  console.log(person.constructor === Object); // true
  console.log(person.constructor === Person); // false
  console.log(person instanceof Person); // true
})();

(function () {
  function Person() {}

  Person.prototype = {
    // 因为 constructor 属性本身不可枚举，所以使用下面的数据属性手动设置 enumerable 和 value
    // constructor: Person
    name: "zhangsan",
    age: 18,
  };

  // 数据属性
  Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person,
  });

  var person = new Person();

  console.log(person.name); // zhangsan
  console.log(person.constructor === Person); // true
  console.log(person instanceof Person); // true
})();
