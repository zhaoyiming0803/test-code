; (function () {

  ;(function () {
    return;
    // 原型污染
    var foo = {
      a: 1
    }
  
    foo.__proto__.b = 2;
    console.log(foo);
  
    var bar = {};
    console.log(bar);
  })();


  ;(function () {
    return;
    var o2 = { a: 1, "__proto__": { b: 2 } }
    for (var prop in o2) {
      console.log(prop); // a b
    }
  })();

  ;(function () {
    // 原型污染
    var o1 = {}
    var o2 = JSON.parse('{"a": 1, "__proto__": {"b": 250}}');
    // var o2 = { "a": 1, "__proto__": { "b": 251 } };
    console.log(o2);

    function merge(target, source) {
      for (var prop in source) {
        console.log(prop);
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
          continue;
        }
        if (!target[prop]) {
          target[prop] = {};
        }
        merge(target[prop], source[prop]);
      }
    }

    merge(o1, o2);

    var o3 = {};
    console.log(o3);

    var o4 = {};
    console.log(o4);
  })();


})();