;(function () {

  Function.prototype._bind = function () {
    var args = [].slice.call(arguments);
    var _this = this;
    return function fn () {
      return _this.apply(args[0], args.slice(1));
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

  var fn1 = fn.bind(obj, 1, 2, 3);
  var fn2 = fn._bind(obj, 1, 2, 3);

  console.log('fn1: ', fn1());
  console.log('fn2: ', fn2());

})();