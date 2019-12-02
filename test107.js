;(function () {

  Array.prototype.forEachAsync = async function (handler) {
    var arrIterator = this[Symbol.iterator]();
    var res = arrIterator.next();
    var index = 0;

    while (!res.done) {
      var val = await handler(res.value, index++, this);
      console.log(val);
      res = arrIterator.next();
    }
  }

  var arr = [2, 1, 3];

  arr.forEachAsync(function handler (item, index, arr) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(item + '-' + index + '-' + arr.toString());
      });
    });
  });

})();