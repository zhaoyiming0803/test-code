;(async function () {

  const arr = [4, 2, 1];

  for(const item of arr) {
    const res = await handler(item);
    console.log(res);
  }

  console.log('结束');

  function handler (item) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(item);
      });
    });
  }

})();