;(function () {

  function compose () {
    var args = [].slice.call(arguments);
    // return function (arg) {
    //   return args[2](args[1](args[0](arg)));
    // }
    return function (arg) {
      return args.reduce((arg, next) => {
        return next(arg);
      }, arg);
    }
  }

  Array.prototype._reduceRight = function (fn, val) {
    const len = this.length

    if (!len) {
      return this
    }

    let i = len - 1
    let _val = val || this[i--]

    while (i >= 0) {
      _val = fn(_val, this[i--])
    }

    return _val
  }

  function composeRight () {
    var args = [].slice.call(arguments)
    return function (arg) {
      return args._reduceRight((arg, next) => {
        return next(arg)
      }, arg)
    }
  }

  function reverse (str) {
    return str.split('').reverse().join('');
  }

  function toUpperCase (str) {
    return str.toUpperCase();
  }

  function toLowerCase (str) {
    return str.toLowerCase();
  }

  console.log(compose(toUpperCase, reverse, toLowerCase)('hello world'));
  console.log(composeRight(toLowerCase, toUpperCase, reverse)('hello world'));

})();