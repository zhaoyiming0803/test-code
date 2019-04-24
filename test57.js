;(function () {

  function cached (fn) {
    var cache = Object.create(null);
    return function (str) {
      var hit = cache[str];
      debugger;
      return hit || (cache[str] = fn(str));
    }
  }

  var reg = /-(\w)/g;

  var camelize = cached(function (str) {
    return str.replace(reg, function ($0, $1) {
      return $1 ? $1.toUpperCase() : '';
    });
  });

  console.log(camelize('hello-world'));
  console.log(camelize('hello-zym'));
  
})();
