;(function () {
  // http://es6.ruanyifeng.com/#docs/generator
  var gen = function* () {
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

;(function () {

  function request (val) {
    setTimeout(() => {
      console.log(val);
      genRes.next();
    }, 50);
  }

  function* gen () {
    yield request(1);
    yield request(2);
    yield request(3);
  }

  const genRes = gen();
  genRes.next();

})();