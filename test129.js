;(function () {

  function loadData (number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(number)
      })
    })
  }

  var list = [1, 2, 3].map(number => {
    return function () {
      return new Promise((resolve, reject) => {
        loadData(number)
          .then(number => resolve(number))
          .catch(error => reject(error))
      })
    }
  })

  function dispatch (list) {
    var index = 0

    function next () {
      var fn = list[index++]
      if (fn) {
        fn().then(number => console.log(number))
          .catch(error => console.log(error))
          .finally(() => next())
      }
    }

    next()
  }

  dispatch(list)
})();