;(function () {

  var person = {
    _data: {
      name: 'zymfe',
      age: 18
    }
  };

  function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        return target[sourceKey][key];
      },
      set: function (newVal) {
        target[sourceKey][key] = newVal;
      }
    });
  }

  var keys = Object.keys(person._data);
  var i = keys.length;
  while (i--) {
    proxy(person, '_data', keys[i]);
  }

  person.name = 'zhaoyiming';

  console.log(person);

})();