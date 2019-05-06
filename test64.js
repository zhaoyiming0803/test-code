;(function () {

  var vm = {
    $options: {
      data: function () {
        return {
          name: 'zymfe',
          age: 18
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

  var watcher = {
    name: function () {
      console.log('change name');
    },
    age: function () {
      console.log('change age');
    }
  };

  var Dep = (function () {
    var uid = 0;
    return function () {
      this.id = uid++;
      this.subs = [];
    }
  })();

  Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
  }

  Dep.prototype.notify = function () {
    var subs = this.subs;
    var i = subs.length;
    while (i--) {
      subs[i]();
    }
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
    var ob = new Observer(target);
    return ob;
  }

  function Observer (value) {
    this.value = value;
    def(value, '__ob__', value);
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

    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        dep.addSub(watcher[key]);
        return val;
      },
      set: function (newVal) {
        if (val === newVal) return;
        val = newVal;
        dep.notify();
      }
    });
  }

  initData();
  vm.age = 100;
  console.log(vm._data.age);

})();