/**
 * author: 赵一鸣
 */
;(function () {

  const STR = 'abc/defg/hi/jkl/mn/opqrst'

  function removeSlashByNum (num) {
    if (num <= 0) {
      return STR
    }
    
    const arr = STR.split('/')

    return arr.reduce((pre, cur, index) => {
      if (index === num) {
        return pre + cur
      }
      const mark = index === 0 
        ? '' 
        : '/'
      return pre + mark + cur
    }, '')
  }

  console.log(removeSlashByNum(0))
  console.log(removeSlashByNum(1))
  console.log(removeSlashByNum(2))
  console.log(removeSlashByNum(3))

})();