;(function () {
return
  function p() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }

  function* run () {
    var res = yield p()
  }

  var gen = run()
  gen.next().value.then(val => {
    console.log(val)
  })
  console.log(gen.next())

})();

;(function () {
return
  function* run () {
    var a = yield 100
    console.log('inline a: ', a)
  }

  var gen = run()
  var a = gen.next(1).value
  console.log('a: ', a)
  var b = gen.next(2).value
  console.log('b: ', b)

})();

;(function () {

  return

  function* run () {
    var a = yield 100
    var b = yield 200
    var c = yield 300
    console.log('inline a: ', a) // 2
    console.log('inline b: ', b) // 3
    console.log('inline c: ', c) // 4
  }

  var gen = run()
  console.log(gen.next(1).value) // 100
  console.log(gen.next(2).value) // 200
  console.log(gen.next(3).value) // 300
  console.log(gen.next(4).value) // undefined

  // 100 -> 200 -> 300 -> inline a: 2 -> inline b: 3 -> inline c: 4 -> undefined

})();

;(function () {

  function* run () {
    var a = yield 100
    var b = yield 200
    var c = yield 300
    console.log('inline a: ', a) // 100
    console.log('inline b: ', b) // 200
    console.log('inline c: ', c) // 300
  }

  function co (gen) {
    var g = gen()
    next()
    function next (value) {
      var res = g.next(value)
      if (res && !res.done) {
        next(res.value)
      }
    }
  }

  co(run)

})();