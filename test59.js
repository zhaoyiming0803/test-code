;(function () {

  var fn = (function () {
    var count = 0;
    return function () {
      return count += 1;
    }
  })();

  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log('--------');

})();

;(function () {

  function fn() {
    return fn.count += 1;
  };
  fn.count = 0;

  console.log(fn());
  console.log(fn());
  console.log(fn());

})();