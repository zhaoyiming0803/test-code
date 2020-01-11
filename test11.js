module.exports = (function () {
  
    return function deepCopy (origin) {
      var target = Array.isArray(origin) ? [] : {};

      for (var prop in origin) {
        if (target[prop]) {
          continue;
        }
        var childOrigin = origin[prop];
        target[prop] = typeof childOrigin !== 'object'
          ? childOrigin
          : deepCopy(childOrigin);
      }

      return target;
    }
    
    var person = {
      name: 'zymfe',
      age: 18,
      skills: ['HTML', 'CSS', 'JavaScript'],
    };
    var copiedPerson = deepCopy(person);
    copiedPerson.age = 20;
    copiedPerson.skills.push('NodeJs');
    console.log(person);
    console.log(copiedPerson);

    console.log('------------------');

    var arr = [1, 2, {count: 3}];
    var copiedArr = deepCopy(arr);
    copiedArr[1] = 200;
    copiedArr[2].count = 300;
    console.log(arr);
    console.log(copiedArr);
  
  })();