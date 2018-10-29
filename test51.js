;(function () {
    
    Object.prototype._toString = function () {
        if (this === undefined || this === null) {
            throw new error(' Cannot read property "toString" of undefined or null');
        }
        
        return '[object '+ this.constructor.name +']';
    }
    
    console.log(Object.prototype._toString.call([1, 2, 3]));
    console.log(Object.prototype._toString.call({}));
    console.log(Object.prototype._toString.call(true));

    
    // 同样是检测对象obj调用toString方法（关于toString()方法的用法的可以参考toString的详解）
    // obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
    
    // 这是因为toString为Object的原型方法，而Array ，function等类型作为Object的实例，都重写了toString方法
    // 不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串
    // Array类型返回元素组成的字符串.....），而不会去调用Object上原型toString方法（返回对象的具体类型）
    // 所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型
    // 因此，在想要得到对象的具体类型时，应该调用Object上原型toString方法。
    
    
    // 如下验证，使用delete删除Array原型上的toString属性，最后打印
    delete Array.prototype.toString;
    
    // 删除了Array的toString方法后，同样再采用arr.toString()方法调用时，不再有屏蔽Object原型方法的实例方法
    // 因此沿着原型链，arr最后调用了Object的toString方法，返回了和Object.prototype.toString.call(arr)相同的结果。
    console.log([].toString());

})();