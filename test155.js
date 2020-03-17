;(function () {

  var str = 'get1_install2_app3_list4_by5_android_6'

  var newStr = str.replace(/(\d)_/g, ($0, $1) => {
    if ($1 % 2 === 0) {
      $1 = ''
    }
    return $1
  })

  console.log(newStr)

})();

;(function () {

  var arr = Array.from({length: 1001}, (v, k) => k)

  console.log(arr)

})();

;(function () {

  var obj1 = {
    a: 1,
    b: '2',
    c: {
      d: 3,
      e: 4,
      f: 5
    }
  }

  var obj2 = {
    a: 10,
    b: '2',
    c: {
      d: 30,
      e: function () {}
    }
  }

  function diff (obj1, obj2) {
    var res = []
    traversal(obj1, obj2, res, 'obj2')
    return res
  }

  function traversal (obj1, obj2, res, rootObj) {
    var keys = Object.keys(obj1)
    keys.forEach(key => {
      var temp = [rootObj]
      if (!obj2[key]) {
        temp.push(key)
      } else if (obj2[key] !== obj1[key]) {
        if (typeof obj2[key] !== 'object') {
          temp.push(key)
        } else {
          temp.push(key)  
          traversal(obj1[key], obj2[key], res, temp.join('-'))
        }
      }
      res.push(temp.join('-'))
    })
  }

  console.log(diff(obj1, obj2))

})();