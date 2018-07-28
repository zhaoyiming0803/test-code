;(function () {

    var obj = {
        name: 'zhangsan'
    };

    function Person (name) {
        this.name = name;
        return obj;
    }
    
    // 1、创建新对象
    // 2、this指向新对象，并且新对象的原型指针__proto__指向当前构造函数的原型
    // 3、执行构造函数中的代码，在对象上添加属性和方法
    // 4、return 实例化构造函数的对象的指向（默认return this）
    var person = new Person('lisi');

    console.log(person.name);
    
})();