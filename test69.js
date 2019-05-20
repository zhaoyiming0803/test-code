;(function () {

  Function.prototype._bind = function () {
    var context = arguments[0];
    var args = arguments.slice(1);
    var _this = this;
    return function fn () {
      return _this.apply(context, args);
    }
  }

  var obj = {
    a: 1,
    b: 2,
    c: 3
  };

  function fn (a, b, c) {
    return this.a + this.b + this.c + a + b + c;
  }

  var $fn = fn.bind(obj, 1, 2, 3);

  console.log($fn());

})();