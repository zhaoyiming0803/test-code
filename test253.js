;(function () {

  const str = '相当于{type=07 1.5}{元}，哦司机佛i睡觉额佛i水电费'

  const newStr = str.replace(/(.*)({.*\s+(.*)})({(.*)})(.*)/, ($0, $1, $2, $3, $4, $5, $6) => {
    return $1 + '{' + $3 + $5 + '}' + $6
  })

  console.log('newStr: ', newStr)

})();