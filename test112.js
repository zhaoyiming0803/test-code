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

  // 需要自己封装工具方法
  // 完成一个请求之后，手动调用 next 方法，执行下一个步骤
  // https://github.com/Jocs/jocs.github.io/issues/11
  // function request (val) {
  //   setTimeout(() => {
  //     genRes.next(val);
  //   }, 1000);
  // }

  function request (val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(val)
      })
    })
  }

  function* gen () {
    // yield 表达式本身没有返回值，或者说总是返回 undefined。
    // next 方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。
    const val1 = yield request(1111);
    console.log(val1);
    const val2 = yield 2;
    console.log(val2);
    const val3 = yield request(3333);
    console.log(val3);
  }

  // const genRes = gen();
  // genRes.next();

  function co (gen) {
    const g = gen()
    next()
    function next (val) {
      const res = g.next(val)
      if (!res.done) {
        if (Object.prototype.toString.call(res.value) === '[object Promise]') {
          res.value.then(res => next(res))
        } else {
          next(res.value)
        }
      }
    }
  }

  co(gen)

})();