;(function () {

  var vm = {
    $options: {
      data: function () {
        return {
          name: 'zymfe',
          age: 18,
          love: {
            sports: 'ping pang',
            food: 'ice cream'
          }
        }
      }
    }
  };

  function getData (data) {
    try {
      return data();
    } catch (e) {
      return {};
    }
  }

  function initData () {
    var data = vm.$options.data;
    data = vm._data = getData(data);
    if (!isPlainObject(data)) {
      console.error('data function should return an object');
    }

    var keys = Object.keys(data);
    var i = keys.length;
    while (i--) {
      proxy(vm, '_data', keys[i]);
    }

    observe(data);
  }

  /**
   * 
   * @param { Object } target     vm
   * @param { Object } sourceKey  _data
   * @param { String } key 
   */
  function proxy (target, sourceKey, key) {
    // 真正的设置响应式数据字段的值是在这个地方，直接通过 vm / this 访问响应式数据字段
    // defineReactive 主要用来收集和触发依赖，其 set 只是修改了闭包的 value
    Object.defineProperty(target, key, {
      get: function () {
        return target[sourceKey][key];
      },
      set: function (val) {
        target[sourceKey][key] = val;
      }
    });
  }

  function isPlainObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  var Dep = (function () {
    var uid = 0;
    return function () {
      this.id = uid++;
      this.subs = [];
    }
  })();

  Dep.target = null;

  Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
  }

  Dep.prototype.notify = function () {
    var subs = this.subs;
    var i = subs.length;
    while (i--) {
      subs[i].callback();
    }
  }

  Dep.prototype.depend = function () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  function pushTarget (target) {
    Dep.target = target;
  }

  function popTarget () {
    Dep.target = null;
  }

  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  function observe (target) {
    if (!isPlainObject(target) && !Array.isArray(target)) {
      return;
    }

    var __ob__ = target.__ob__;
    var ob = __ob__ && __ob__ instanceof Observer
      ? __ob__
      : new Observer(target);

    return ob;
  }

  function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    def(value, '__ob__', this);
    this.walk(value);
  }

  Observer.prototype.walk = function (obj) {
    var keys = Object.keys(obj);
    var i = keys.length;
    while (i--) {
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * 
   * @param { Object } target vm._data
   * @param { String } key 
   */
  function defineReactive (target, key) {
    var val = target[key];
    var dep = new Dep();
    var childOb = observe(val);

    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
        }
        return val;
      },
      set: function (newVal) {
        if (val === newVal) return;
        val = newVal;
        dep.notify();
      }
    });
  }

  var Watcher = (function () {
    var uid = 0;
    return function (vm, exp, callback) {
      this.uid = uid++;
      this.callback = callback;
      this.get(vm, exp);
    }
  })();

  Watcher.prototype.get = function (vm, exp) {
    // JS 同步执行，同一时间，有且只有一个观察者（依赖）被收集
    pushTarget(this);
    if (/\./.test(exp)) {
      var arr = exp.split('.');
      var obj = vm[arr[0]];
      for (var i = 1; i < arr.length; i += 1) {
        obj = obj[arr[i]];
      }
      popTarget();
      return;
    }
    vm[exp];
    popTarget();
  }

  Watcher.prototype.addDep = function (dep) {
    dep.addSub(this);
  }


  initData();

  new Watcher(vm, 'age', function () {
    console.log('change age now');
  });

  new Watcher(vm, 'love.sports', function () {
    console.log('change love.sports now');
  });

  vm.age = 100;
  console.log(vm._data.age === vm.age);

  vm.love.sports = 'basketball';
  // 测试是否会收集多余的依赖
  console.log(vm.love);
  console.log(vm.love);
  console.log(vm._data.love.sports);

})();