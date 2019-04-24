;(function () {

  // 参考文档：http://es6.ruanyifeng.com/#docs/proxy

  var person = {
    name: 'zhaoyiming',
    age: 18,
    sex: 'man',
    _skill: ['HTML', 'CSS', 'JavaScript']
  };

  person.__proto__ = {
    showName: function () {
      return this.name;
    }
  };

  var proxy = new Proxy(person, {
    get: function (target, key) {
      var value = target[key];
      return value
        ? value
        : `property or method '${key}' is not defined`;
    },

    set: function (target, key, value) {
      if (key === 'sex') return 'man';
      target[key] = value;
    },

    has: function (target, key) {
      if (key[0] === '_') return false;
      return key in target;
    }
  });

  console.log(proxy.haha);
  console.log(proxy.name);

  proxy.sex = 'woman';
  proxy.age = 20;

  console.log(proxy.sex);
  console.log(proxy.age);

  // has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性
  // has拦截只对in运算符生效，对for...in循环不生效，导致不符合要求的属性没有被for...in循环所排除。
  console.log('_name' in proxy);
  console.log('hehe' in proxy);
  console.log('name' in proxy);
  console.log('prototype: ', proxy.showName);

  var obj = Object.create(proxy);
  console.log('obj.name: ', obj.name); // zhaoyiming
  console.log('obj.love: ', obj.love); // property or method 'love' is not defined

  var fn = function () {
    return 'I am the fn';
  };

  var proxyFn = new Proxy(fn, {
    apply: function (target, ctx, args) {
      console.log('apply-target: ', target);
      console.log('apply-ctx: ', ctx);
      console.log('apply-args: ', args);
      return 'I am the proxyFn';
    }
  });

  console.log(proxyFn.call(person, 1, 2, 3));
  console.log(proxyFn.apply(person, [4, 5, 6]));
  console.log(proxyFn({}));
  
})();