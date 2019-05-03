;(function () {

    var person = {
      name: 'zymfe',
      age: 18,
      skills: ['HTML', 'CSS', 'JavaScript'],
    };
  
    function deepCopy (target, origin) {
      if (origin === undefined) {
        origin = target;
        target = {};
      }
      
      for (let prop in origin) {
        if (!origin.hasOwnProperty(prop) || target[prop]) {
          continue;
        }

        var originChild = origin[prop];

        if (typeof originChild === 'string') {
          target[prop] = originChild;
          continue;
        }

        target[prop] = Array.isArray(originChild)
          ? []
          : {};
        deepCopy(target[prop], originChild);
      }
    
      return target;
    }
  
    var copiedPerson = deepCopy({}, person);
    copiedPerson.age = 20;
    copiedPerson.skills.push('NodeJs');
  
    console.log(copiedPerson);
    console.log(person);
  
  })();