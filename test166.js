;(function () {

  const obj = {
    a: {
      b: 'b',
      d: 'd'
    },
    c: 'c'
  }

  const {a: {b}} = obj
  const {a: d} = obj

  console.log('b: ', b) // b
  console.log('d: ', d) // { b: 'b', d: 'd' }

})();
