;(function () {

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1'), 2000)
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('p2'), 1000)
  })

  function promiseAll (arr) {
    const result = []
    let j = 0
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i += 1) {
        arr[i]
          .then(res => result[i] = res)
          .catch(res => result[i] = null)
          .finally(() => {
            if (++j === arr.length) resolve(result)
          })
      }
    })
  }

  promiseAll([p1, p2]).then(res => {
    console.log(res)
  }).catch(res => {})

})();