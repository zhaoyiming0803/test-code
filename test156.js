;(function () {

  return

  // 箭头函数是一个匿名函数，而且内部没有属于自己的 this
  // 所以不能被当做构造函数使用
  // 所以箭头函数也没有 prototype 原型属性
  // 所以也无法用 call 、apply 、bind 改变其 this 指向
  const Person = (name, age) => {
    this.name = name
    this.age = age
  }

  const p = new Person('zhaoyiming', 18)

})();

;(function () {

  return

  // 箭头函数不能使用 arguments 来获取参数，只能用 rest 参数 ... 解决

  const fn = (...args) => {
    console.log(args) // [1, 2, 3, 4]
    console.log(args.length) // 4
    console.log(Object.prototype.toString.call(args) === '[object Array]') // true
  }

  fn(1, 2, 3, 4)

})();
