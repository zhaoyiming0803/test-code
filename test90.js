;(function () {

    function Person () {}

    Person.prototype.show = function show () {}

    var p = new Person();

    console.log(p.__proto__); // Person { show: [Function: show] }
    console.log(p.__proto__.__proto__); // {}
    console.log(p.__proto__.__proto__.__proto__); // null

    console.log(p.__proto__.__proto__.constructor); // [Function: Object]
    console.log(p.__proto__.__proto__.constructor.constructor); // [Function: Function]
    console.log(p.__proto__.__proto__.constructor.constructor.constructor); // [Function: Function]

})();