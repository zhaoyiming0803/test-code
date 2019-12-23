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

  function reverse (str) {
    return str.split('').reverse().join('');
  }

  function toUpperCase (str) {
    return str.toUpperCase();
  }

  function toLowerCase (str) {
    return str.toLowerCase();
  }

  const fn = compose(toUpperCase, reverse, toLowerCase);
  console.log(fn('hello world'));

  

})();