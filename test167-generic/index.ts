class Person<T> {
  name: string;
  message: T;

  constructor(name: string, message: T) {
    this.name = name;
    this.message = message;
  }

  printInfo() {
    console.log(typeof this.message);
  }

  getStringLength() {
    // 类型“T”上不存在属性“length”
    // return this.message.length;

    return typeof this.message === "string"
      ? this.message.length
      : this.message.toString().length;
  }
}

const p1 = new Person("zhangsan", "hello ts");
p1.printInfo(); // string
console.log(p1.getStringLength()); // 8

const p2 = new Person("lisi", 12345);
p2.printInfo(); // number
console.log(p2.getStringLength()); // 5
