;(function () {

  const obj1 = {
    skills: ['HTML', 'CSS', 'JavaScript']
  };

  const obj2 = Object.create(obj1);

  obj2.skills.push('Node.js');

  console.log(obj1);

})();