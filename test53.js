;(function () {

  var str1 = 'hello-world';

  var a = str1.replace(/-/g, ($1, $2, $3, $4) => {
    console.log('$1', $1)
    console.log('$2', $2)
    console.log('$3', $3)
    console.log('$4', $4)
    return '-';
  });

  console.log('a', a);

  console.log('-------------------------------');

  var b = str1.replace(/-(\w)/g, ($1, $2, $3, $4) => {
    console.log('$1', $1)
    console.log('$2', $2)
    console.log('$3', $3)
    console.log('$4', $4)
    return $2 ? $2.toUpperCase() : '';
  });

  console.log('b', b);

  console.log('-------------------------------');

  var c = str1.replace(/-(\w+)/g, ($1, $2, $3, $4) => {
    console.log('$1', $1)
    console.log('$2', $2)
    console.log('$3', $3)
    console.log('$4', $4)
    return $2 ? $2.toUpperCase() : '';
  });

  console.log('c', c);

  console.log('-------------------------------');

  var str2 = 'he-llo-world';
  var d = str2.replace(/-(\w+)/, ($1, $2, $3, $4) => {
    console.log('$1', $1)
    console.log('$2', $2)
    console.log('$3', $3)
    console.log('$4', $4)
    return $2 ? $2.toUpperCase() : '';
  });

  console.log('d', d);

  console.log('-------------------------------');

  var str3 = 'hello-w2?~orld';
  var e = str3.replace(/-(\w)(\d)(\?)[~]/, ($1, $2, $3, $4, $5, $6) => {
    console.log('$1', $1)
    console.log('$2', $2)
    console.log('$3', $3)
    console.log('$4', $4)
    console.log('$5', $5)
    console.log('$6', $6)
    return $2 ? $2.toUpperCase() : '';
  });

  console.log('e', e);

  // ECMAScript v3 规定，replace() 方法的参数 replacement 可以是函数而不是字符串。
  // 在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。
  // 该函数的第一个参数是匹配模式的字符串。
  // 接下来的参数是与模式中的子表达式匹配的字符串，可以有 0 个或多个这样的参数。
  // 接下来的参数是一个整数，声明了匹配在 stringObject 中出现的位置。
  // 最后一个参数是 stringObject 本身。

})();