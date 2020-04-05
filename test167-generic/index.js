var Person = /** @class */ (function () {
    function Person(name, message) {
        this.name = name;
        this.message = message;
    }
    Person.prototype.printInfo = function () {
        console.log(typeof this.message);
    };
    Person.prototype.getStringLength = function () {
        // 类型“T”上不存在属性“length”
        // return this.message.length;
        return typeof this.message === "string"
            ? this.message.length
            : this.message.toString().length;
    };
    return Person;
}());
var p1 = new Person("zhangsan", "hello ts");
p1.printInfo(); // string
console.log(p1.getStringLength());
var p2 = new Person("lisi", 12345);
p2.printInfo(); // number
console.log(p2.getStringLength());
