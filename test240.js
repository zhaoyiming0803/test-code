;(function () {

  function fn ({a, b, c, d}) {
    console.log('a: ', a)
    console.log('d: ', d)
  }

  fn() // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined

})();