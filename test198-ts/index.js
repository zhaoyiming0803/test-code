~(function () {
    var animal = {
        name: "a"
    };
    var dog = {
        name: "b",
        age: 1
    };
    var value = {
        x: animal,
        y: dog
    };
    console.log(value);
})();
~(function () {
    // interface：
    // 同名的 interface 自动聚合，也可以跟同名的 class 自动聚合
    // 只能表示 object、class、function 类型
    var Sex;
    (function (Sex) {
        Sex[Sex["woman"] = 0] = "woman";
        Sex[Sex["man"] = 1] = "man";
    })(Sex || (Sex = {}));
    // const person: Person = {
    //   name: "zhangsan",
    //   age: 18,
    //   sex: 1,
    // };
    var Person = /** @class */ (function () {
        function Person(name, age, sex, tel) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.tel = tel;
        }
        return Person;
    }());
    var person = new Person("lisi", 18, 0, "13100000000");
})();
~(function () {
    // type: 不仅仅能够表示 object、class、function
    // 不能重名（自然不存在同名聚合了），扩展已有的 type 需要创建新 type
    // 支持复杂的类型操作
    var print = function (dog) {
        console.log(dog);
    };
    var dog = {
        name: "hahe",
        age: 2,
        // sex: 2,
        sex: 1
    };
    print(dog);
})();
~(function () {
    // interface 和 type 之间可以互相继承扩展
    var Sex;
    (function (Sex) {
        Sex[Sex["woman"] = 0] = "woman";
        Sex[Sex["man"] = 1] = "man";
    })(Sex || (Sex = {}));
    var animal = {
        age: 1,
        sex: 1
    };
    var dog = {
        name: "dog",
        age: 10
    };
})();
~(function () {
    var SomePoint1 = /** @class */ (function () {
        function SomePoint1(x, y) {
            this.x = x;
            this.y = y;
        }
        return SomePoint1;
    }());
    var SomePoint2 = /** @class */ (function () {
        function SomePoint2(x, y) {
            this.x = x;
            this.y = y;
        }
        return SomePoint2;
    }());
    // can not implement a union type
    // class SomePartialPoint implements PartialPoint {}
})();
~(function () {
    // 解决在严格模式下，arguments 不可用的问题
    var sum = (function () {
        var inner = function (x, y) {
            inner.count += 1;
            return x + y;
        };
        inner.count = 0;
        return inner;
    })();
    sum(1, 1);
    sum(1, 1);
    sum(1, 1);
    var clonedSum = sum;
    sum = null;
    clonedSum(1, 1);
    clonedSum(1, 1);
    clonedSum(1, 1);
    console.log("sum.count: ", clonedSum.count); // 6
})();
~(function () {
    // 位运算符 |
    // var a = 100.035 | 0;
    // console.log(a);
    var c = {
        a: "0",
        b: "1",
        c: [1, 2]
    };
    var d1 = {
        b: "1",
        c: [2, 3]
    };
    var d2 = {
        a: "a",
        b: "b",
        c: [2, 3]
    };
})();
~(function () {
    var obj = {
        // assign: <T, U>(target: T, source: U) => {
        //   const result: T & U = {} as T & U;
        //   for (let prop in target) {
        //     result[prop] = target[prop] as any;
        //   }
        //   for (let prop in source) {
        //     result[prop] = source[prop] as any;
        //   }
        //   return result;
        // },
        assign: function (target, source) {
            for (var prop in source) {
                // 类型断言是暂时性的，下次用到还得继续断言
                target[prop] = source[prop];
            }
            return target;
        }
    };
    var objA = {
        a: 1,
        b: 2
    };
    var objB = {
        c: 3
    };
    console.log(obj.assign(objA, objB));
})();
~(function () {
    var keys = "name";
    // const keys: keysOfPerson = "skill";
})();
