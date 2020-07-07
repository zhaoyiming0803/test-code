;(function () {

  const str = '搜附近舒服sd{123sd收到123}水电费水电费sd1'

  const newStr = str.replace(/(.*)\{(.*)\}(.*)/, ($0, $1, $2, $3) => {
    console.log('$1: ', $1)
    console.log('$2: ', $2)
    console.log('$3: ', $3)

    return $1 + `<div>${$2}</div>` + $3
  })

  console.log(newStr)

})();