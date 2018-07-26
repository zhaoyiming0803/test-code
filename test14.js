;(function () {
  
    var arr1 = [1, 2, 3, 4];
    var arr2 = ['a', 'b', 'c'];

    var arrList = ['push', 'pop', 'unshift', 'shift', 'reverse', 'splice', 'slice', 'join'];

    var arrProto = {};

    for (var i = 0; i < arrList.length; i += 1) {
        arrProto[arrList[i]] = (function (i) {
            return function () {
                console.log('hello world');
                return [][arrList[i]].apply(this, arguments);
            }
        })(i);
    }
    
    arr1.__proto__ = arrProto;
    
    arr1.push(5);
    arr2.push('d');

    console.log(arr1);
    console.log(arr2);

})();