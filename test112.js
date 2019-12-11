;(function () {
  // http://es6.ruanyifeng.com/#docs/generator
  var gen = function * () {
    var a = yield 1;
    var b = yield 2;
    return 'hello world';
  }

  const genRes = gen();

  function getValue () {
    const res = genRes.next();
    // if (res.value !== undefined) {
    //   console.log(res.value);
    //   getValue();
    // }
    console.log(res.value);
    if (!res.done) {
      getValue();
    }
  };

  getValue();

})();