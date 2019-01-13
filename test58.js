;(function () {

  // 参考文档：http://es6.ruanyifeng.com/#docs/proxy

  var person = {
    name: 'zhaoyiming',
    age: 18,
    sex: 'man',
    _skill: ['HTML', 'CSS', 'JavaScript']
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

  console.log('_name' in proxy);
  console.log('hehe' in proxy);

  var fn = function () {
    return 'I am the fn';
  };

  var proxyFn = new Proxy(fn, {
    apply: function (target, ctx, args) {
      console.log(target);
      console.log(ctx);
      console.log(args);
      return 'I am the proxyFn';
    }
  });

  console.log(proxyFn.call(person, 1, 2, 3));
  console.log(proxyFn.apply(person, [4, 5, 6]));
  
})();