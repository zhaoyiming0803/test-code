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
          },
          skills: [
            'HTML', 
            'CSS', 
            'JavaScript',
            {
              a: 1,
              b: 2
            },/** 仅供测试 */
            [1, 2, 3, 4]
          ],
          a: {
            b: {
              c: 100
            }
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

  var hasProto = '__proto__' in {};
  // var hasProto = null;
  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  
  ;(function () {
    var arrayMethodsPatch = [
      'push',
      'pop',
      'unshift',
      'shift',
      'reverse',
      'concat',
      'slice',
      'splice',
      'sort',
      'join'
    ];
    var i = arrayMethodsPatch.length;

    while (i--) {
      ;(function () {
        var method = arrayMethodsPatch[i];
        var origin = arrayProto[method];
        def(arrayMethods, method, function () {
          var args = [].slice.call(arguments, 0);
          var res = origin.apply(this, args);
          var ob = this.__ob__;
          // 数组的 push unshift splice 不是纯函数，会改变自身
          var inserted = ['push', 'unshift'].includes(method)
            ? args
            : 'splice' === method
              ? args.slice(2)
              : [];
          if (inserted.length) {
            ob.observeArray(inserted);
          }
          console.log('执行变异的数据方法并触发依赖回调，返回值:', inserted);
          ob.dep.notify();
          return res;
        });
      })();
    }
  })();

  function protoAugment (value, arrayMethods) {
    value.__proto__ = arrayMethods;
  }

  function copyAugment (value, arrayMethods) {
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    for (var i = 0; i < arrayKeys.length; i += 1) {
      var key = arrayKeys[i];
      def(value, key, arrayMethods[key]);
    }
  }

  /**
   * dependArray 主要解决以下问题：
   * 数组元素的访问形式为[索引值]，它和对象的访问器属性不同，例：
   * vm.love = {} 可以赋新值，并重新收集 love 字段的依赖，但
   * vm.skills[3] = [] 无法收集对新值的依赖，这是 JS 对象和数组的不同之处
   * 测试用例：test3、test4
   * @param { Array } value 
   */
  function dependArray (value) {
    for (var i = 0; i < value.length; i += 1) {
      var item = value[i];
      item && item.__ob__ && item.__ob__.dep.depend();
      if (Array.isArray(item)) {
        dependArray(item);
      }
    }
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
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  Observer.prototype.walk = function (value) {
    var keys = Object.keys(value);
    var i = keys.length;
    while (i--) {
      defineReactive(value, keys[i]);
    }
  }

  Observer.prototype.observeArray = function (value) {
    for (var i = 0; i < value.length; i += 1) {
      observe(value[i]);
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
            if (Array.isArray(val)) {
              dependArray(val);
            }
          }
        }
        return val;
      },
      set: function (newVal) {
        if (val === newVal) return;
        val = newVal;
        childOb = observe(newVal);
        console.log('执行了对象依赖回调，新值：', newVal);
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
    eval(exp);
    popTarget();
  }

  Watcher.prototype.addDep = function (dep) {
    dep.addSub(this);
  }


  initData();

  ;(function test1 () {
    return;
    new Watcher(vm, 'vm.age', function () {
      console.log('change age now');
    });
  
    vm.age = 100;
    console.log(vm._data.age === vm.age);
  })();

  ;(function test2 () {
    return;
    new Watcher(vm, 'vm.love.sports', function () {
      console.log('change love.sports now');
    });
  
    vm.love.sports = 'basketball';
    // 测试是否会收集多余的依赖
    console.log(vm.love);
    console.log(vm.love);
    console.log(vm._data.love.sports);

    vm.love = {
      a: 1
    };
  
    vm.love.sports = {};
  })();

  ;(function test3 () {
    return;
    new Watcher(vm, 'vm.skills[3].b', function () {
      console.log('vm.skills[3].b：', vm.skills[3]);
    });

    vm.skills[3].b = 1000;
    console.log(vm.skills[3].b);
  })();

  ;(function test4 () {
    return;
    new Watcher(vm, 'vm.skills', function () {
      console.log('change skills now');
    });
  
    new Watcher(vm, 'vm.skills[4]', function () {
      console.log('vm.skills[4]：', vm.skills[4]);
    });

    new Watcher(vm, 'vm.skills[4][1]', function () {
      console.log('vm.skills[4][1]：', vm.skills[4][1]);
    });
  
    vm.skills[4].splice(1, 1, 200); // 可以触发依赖回调
    // vm.skills[4][1] = 200; // 无法触发依赖回调
    console.log('vm.skills[4]: ', vm.skills[4]);
  })();

  ;(function test4 () {
    new Watcher(vm, 'vm.a', function () {
      console.log('vm.a');
    });

    new Watcher(vm, 'vm.a.b', function () {
      console.log('vm.a.b');
    });

    new Watcher(vm, 'vm.a.b.c', function () {
      console.log('vm.a.b.c');
    });
    
    vm.a.b = 'b';
    // vm.a.b.c = 'c';
  })();

})();