!(function () {
  var Person = (function () {
    var instance = null;
    function Inner(name) {
      this.name = name;
    }
    return function (name) {
      if (!instance) {
        instance = new Inner(name);
      }
      return instance;
    };
  })();

  var p1 = new Person("zhangsan");
  var p2 = new Person("lisi");
  console.log(p2); // Inner { name: 'zhangsan' }
  console.log(p1 === p2); // true
  console.log(p1.constructor); // [Function: Inner]
})();
