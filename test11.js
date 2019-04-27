;(function () {

    var person = {
      name: 'zymfe',
      age: 18,
      skills: ['HTML', 'CSS', 'JavaScript'],
    };
  
    function deepCopy (origin, target) {
      if (target === undefined) {
        target = origin;
        origin = {};
      }
      var keys = Object.keys(target);
  
      for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];
        
        if (origin[key]) {
          continue;
        }
  
        var val = target[key];
        if (typeof val !== 'object') {
          origin[key] = val;
          continue;
        }
  
        var child = Array.isArray(val)
          ? []
          : {};
        origin[key] = deepCopy(child, val);
      }
  
      return origin;
    }
  
    var copiedPerson = deepCopy({}, person);
    copiedPerson.age = 20;
    copiedPerson.skills.push('NodeJs');
  
    console.log(copiedPerson);
    console.log(person);
  
  })();