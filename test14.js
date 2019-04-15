;(function () {

    var arr1 = ['a', 'b', 'c'];
    var arr2 = [0, 1, 2];
  
    var arrProto = {};
    var arrMethodList = ['push', 'pop', 'unshift', 'shift', 'splice', 'slice', 'reverse', 'sort', 'concat', 'join'];
  
    for (var i = 0; i < arrMethodList.length; i += 1) {
      arrProto[arrMethodList[i]] = (function (i) {
        return function () {
          console.log('做自己想做的事情');
          var args = [].slice.call(arguments, 0);
          return [][arrMethodList[i]].apply(this, args);
        }
      })(i);
    }
  
    arr2.__proto__ = arrProto;
  
    arr2.push(3);
    console.log(arr2);
    console.log(Object.prototype.toString.call(arr2));
  
    arr1.push('d');
    console.log(arr1);
  
  })();