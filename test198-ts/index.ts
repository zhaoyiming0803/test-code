~(function () {
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    age: number;
  }

  // 数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
  // interface NotOkay {
  //   [x: number]: Animal;
  //   [y: string]: Dog;
  // }

  // Typescript支持两种索引签名：字符串和数字。
  // 可以同时使用两种类型的索引，但是数字索引的返回值不能是字符串索引返回值类型的父类型。
  interface Okay {
    [x: string]: Animal;
    [y: number]: Dog;
  }

  const animal: Animal = {
    name: "a",
  };

  const dog: Dog = {
    name: "b",
    age: 1,
  };

  const value: Okay = {
    x: animal,
    y: dog,
  };

  console.log(value);
})();

~(function () {
  // interface：
  // 同名的 interface 自动聚合，也可以跟同名的 class 自动聚合
  // 只能表示 object、class、function 类型

  enum Sex {
    "woman",
    "man",
  }

  interface Person {
    name: string;
    age: number;
  }

  interface Person {
    name: string;
    age: number;
    sex: Sex;
  }

  // const person: Person = {
  //   name: "zhangsan",
  //   age: 18,
  //   sex: 1,
  // };

  class Person {
    name: string;
    age: number;
    sex: Sex;
    tel: string;

    constructor(name: string, age: number, sex: Sex, tel: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.tel = tel;
    }
  }

  const person = new Person("lisi", 18, 0, "13100000000");
})();

~(function () {
  // type: 不仅仅能够表示 object、class、function
  // 不能重名（自然不存在同名聚合了），扩展已有的 type 需要创建新 type
  // 支持复杂的类型操作

  type Sex = 0 | 1;

  type Animal = {
    name: string;
  };

  type Dog = Animal & {
    age: number;
    sex: Sex;
  };

  type PrintFn = (dog: Dog) => void;

  const print: PrintFn = (dog: Dog) => {
    console.log(dog);
  };

  const dog: Dog = {
    name: "hahe",
    age: 2,
    // sex: 2,
    sex: 1,
  };

  print(dog);
})();

~(function () {
  // interface 和 type 之间可以互相继承扩展
  enum Sex {
    "woman",
    "man",
  }

  interface Animal {
    name: string;
  }

  type Dog = {
    age: number;
  };

  interface InterfaceExtendsType extends Dog {
    sex: Sex;
  }

  type TypeExtendsInterface = Dog & Animal;

  const animal: InterfaceExtendsType = {
    age: 1,
    sex: 1,
  };

  const dog: TypeExtendsInterface = {
    name: "dog",
    age: 10,
  };
})();

~(function () {
  interface Point1 {
    x: number;
    y: number;
  }

  class SomePoint1 implements Point1 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  type Point2 = {
    x: number;
    y: number;
  };

  class SomePoint2 implements Point2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  type PartialPoint = { x: number } | { y: number };

  // can not implement a union type
  // class SomePartialPoint implements PartialPoint {}
})();

~(function () {
  // interface 可以做到给函数挂载属性，但是type做不到
  interface Sum {
    (x: number, y: number): number;
    count: number;
  }

  // 解决在严格模式下，arguments 不可用的问题
  let sum: Sum = (function () {
    const inner: Sum = (x: number, y: number) => {
      inner.count += 1;
      return x + y;
    };
    inner.count = 0;
    return inner;
  })();

  sum(1, 1);
  sum(1, 1);
  sum(1, 1);

  const clonedSum = sum;
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

  // | 和 & 并非位运算符。
  // 我们可以理解为 & 表示必须同时满足所有的契约。| 表示可以满足一个或多个契约。
  interface IA {
    a: string;
    b: string;
  }

  type IB = {
    b: string;
    c: number[];
  };

  type TC = IA & IB;
  type TD = IA | IB;

  const c: TC = {
    a: "0",
    b: "1",
    c: [1, 2],
  };

  const d1: TD = {
    b: "1",
    c: [2, 3],
  };

  const d2: TD = {
    a: "a",
    b: "b",
    c: [2, 3],
  };
})();

~(function () {
  // 泛型就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，
  // 而后再通过实际运行或推导的类型来对其进行替换，以达到一段使用泛型程序可以实际适应不同类型的目的。
  // 说白了，「泛型就是不预先确定的数据类型，具体的类型在使用的时候再确定的一种类型约束规范」。
  interface ObjectConstructor {
    assign<T, U>(target: T, source: U): T & U;
  }

  const obj: ObjectConstructor = {
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
    assign: <T, U>(target: T, source: U) => {
      for (let prop in source) {
        // 类型断言是暂时性的，下次用到还得继续断言
        (target as T & U)[prop] = source[prop] as any;
      }
      return target as T & U;
    },
  };

  const objA = {
    a: 1,
    b: 2,
  };

  const objB = {
    c: 3,
  };

  console.log(obj.assign(objA, objB));
})();

~(function () {
  interface Person {
    name: string;
    age: number;
    sex: 0 | 1;
  }

  type keysOfPerson = keyof Person;

  const keys: keysOfPerson = "name";
  // const keys: keysOfPerson = "skill";
})();
