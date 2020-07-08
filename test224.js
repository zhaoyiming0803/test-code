;(function () {

  const arr = [
    {
      text: '啊{123}不'
    },
    {
      text: '不{456}啊'
    }
  ]

  const newArr = arr.map(item => {
    const regRes = item.text.match(/\{([\S\s]+)\}/)
    console.log('regRes: ', regRes)
    if (!regRes) {
      return {
        left: item.text,
        center: '',
        right: ''
      }
    } else {
      return {
        left: item.text.slice(0, regRes.index),
        center: regRes[1],
        right: item.text.slice(regRes.index + regRes[0].length)
      }
    }
  })

  console.log(newArr)

})();