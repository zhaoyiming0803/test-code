; (function () {

  function deepCopy(target, from) {
    for (var prop in from) {
      if (!from.hasOwnProperty(prop) || target[prop]) {
        continue;
      }

      var type = Object.prototype.toString.call(from[prop]);

      if (type === '[object Object]') {
        target[prop] = {};
        deepCopy(target[prop], from[prop]);
      } else if (type === '[object Array]') {
        target[prop] = [];
        deepCopy(target[prop], from[prop]);
      } else {
        target[prop] = from[prop];
      }
    }

    return target;
  }

  var person = {
    name: 'zym',
    age: 18,
    skills: ['html', 'css', 'javaScript'],
    love: {
      fruits: ['apple', 'pear', 'melon'],
      sport: ['backetball', 'ping-pong']
    }
  };

  var obj = deepCopy({}, person);

  obj.love.fruits[2] = 'banana';

  console.log(obj);
  console.log(person);




  var arr1 = [{ a: 1, b: 2 }, 3, 4, 5];
  
  var arr2 = deepCopy([], arr1);

  arr2[0].a = 100;

  console.log(arr2);
  console.log(arr1);


})();