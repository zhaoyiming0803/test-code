~(function () {
  // 他无法实现对函数 、RegExp等特殊对象的克隆
  // 会抛弃对象的 constructor, 所有的构造函数会指向 Object;
  // 对象有循环引用, 会报错;

  function Person(name) {
    this.name = name;
  }

  const p = new Person("zhangsan");
  console.log(p.constructor); // Person

  const obj = {
    p,
  };
  const objStr = JSON.stringify(obj);
  const clonedObj = JSON.parse(objStr);
  console.log(clonedObj.p); // { name: 'zhangsan' }
  console.log(clonedObj.constructor); // Object
})();
