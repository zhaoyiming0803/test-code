; (function () {

  var arr = [
    () => {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(123)
      //     resolve(123)
      //   }, 1000)
      // })
      return 112233
    },
    undefined,
    (res) => {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(456)
      //     resolve(456)
      //   }, 2000)
      // })
      console.log(res, 456)
      return 456
    },
    undefined
  ]

  var promise = Promise.resolve({
    a: 1,
    b: 0
  })

  promise = promise.then(arr[0], arr[1])

  promise = promise.then(arr[2], arr[3])




})()