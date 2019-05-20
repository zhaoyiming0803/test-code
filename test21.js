;(function () {

	var obj = {
		name: 'zhangsan'
	};

	function Person(name) {
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

;(function () {

	function Fn (a, b) {
		this.a = a;
		this.b = b;
		return this;
	}

	Fn.prototype.sum = function () {
		return this.a + this.b;
	}

	Fn.prototype.product = function () {
		return this.a * this.b;
	}

	var obj = {};

	obj.__proto__ = Fn.prototype;

	var o = Fn.call(obj, 1, 2);

	console.log(o.a);
	console.log(o.b);
	console.log(o.sum());
	console.log(o.product());


})();