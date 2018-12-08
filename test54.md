###  什么是正则表达式？

正则表达式(regular expression)描述了一种字符串匹配的模式，可以用来检查一个字符串是否含有某种子串、将匹配的子串做替换或者从某个字符串中取出符合某个条件的子串等。其实正则表达式就是处理字符串的，我们可以用它来处理一些复杂的字符串。

如下两种方式，找出字符串中的所有数字：

``` javascript
var str = 'abd123oi909i9Wowej8';
```

1、使用循环遍历字符串，逐个判断：

``` javascript
function findNumByLoop (str) {
  var tmp = '';
  var arr = [];
  for (var i = 0, len = str.length; i <= len; i += 1) {
    var cur = str[i];
    if (!isNaN(cur)) {
      tmp += cur;
    } else {
      if (tmp) {
        arr.push(tmp);
      }
      tmp = '';
    }
  }
  return arr;
}
console.log(findNumByLoop(str));
```

2、使用正则表达式：

``` javascript
function findNumByReg () {
  var reg = /\d+/g;
  var match = '';
  var arr = [];
  while ((match = reg.exec(str))) {
    arr.push(match[0]);
  }
  return arr;
}
console.log(findNumByReg(str));
```

### 正则表达式的创建方式：

1、字面量创建：

``` javascript
var reg = /\d+/;
```

2、实例创建：

``` javascript
var reg = new RegExp(/\d+/, 'img')
```

构造函数 RegExp 的第一个参数就是正则表达式，第二个参数是修饰符：

i 忽略大小写匹配

m 多行匹配，即在到达一行文本末尾时还会继续寻常下一行中是否与正则匹配的项

g 全局匹配 模式应用于所有字符串，而非在找到第一个匹配项时停止

### 字面量创建方式和构造函数创建方式的区别

1、字面量创建方式不能进行字符串拼接，实例创建方式可以：

``` javascript
var regParam = 'cm';
var reg1 = new RegExp(regParam + '1');
var reg2 = /regParam/;
console.log(reg1);    //   /cm1/
console.log(reg2);    //  /regParam/
```

2、字面量创建方式特殊含义的字符不需要转义，实例创建方式需要转义：

``` javascript
var reg1 = new RegExp('\d');  //  /d/ 
var reg2 = new RegExp('\\d')  //  /\d/
var reg3 = /\d/;              //  /\d/
```

###  元字符

参考 W3C 手册：《[JavaScript RegExp 对象](http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)》。

大概总结下：

1、代表特殊含义的元字符：

\d : 0-9之间的任意一个数字  \d只占一个位置

\w : 数字，字母 ，下划线 0-9 a-z A-Z _

\s : 空格或者空白等

\D : 除了\d

\W : 除了\w

\S : 除了\s

 . : 除了\n之外的任意一个字符

 \ : 转义字符

 | : 或者

() : 分组

\n : 匹配换行符

\b : 匹配边界：字符串的开头和结尾 空格的两边都是边界 => 不占用字符串位数

 ^ : 限定开始位置 => 本身不占位置

 $ : 限定结束位置 => 本身不占位置

[a-z] : 任意字母 []中的表示任意一个都可以

[^a-z] : 非字母 []中^代表除了

[abc] : abc三个字母中的任何一个 [^abc]除了这三个字母中的任何一个字符

2、代表次数的量词元字符：

\* : 0到多个

\+ : 1到多个

? : 0次或1次 可有可无

{n} : 正好n次；

{n,} : n到多次

{n, m} : n次到m次

### 元字符的具体使用实例

### 量词出现在元字符后面 如 \d+ ，限定出现在前面的元字符的次数：

``` javascript
var str = '1223334444';
var reg = /\d{2}/g;
var res = str.match(reg);
console.log(res);           // ["12", "23", "33", "44", "44"]

var str ='  我是空格君  ';
var reg = /^\s+|\s+$/g;     // 匹配开头结尾空格
var res = str.replace(reg,'');
console.log('('+res+')');   // (我是空格君)
```

### 正则中的 [] ：

一般 [] 中的字符没有特殊含义，如 + 就表示 + ，但是像 \w 这样的还是有特殊含义的：

``` javascript
var str1 = 'abc';
var str2 = 'dbc';
var str3 = '.bc';
var reg = /[ab.]bc/;    // 此时的 . 就表示 .
reg.test(str1);         // true
reg.test(str2);         // false
reg.test(str3);         // true
```

[] 中，不会出现两位数：

``` javascript
// [12] 表示 1 或者 2，不过 [0-9] 这样的表示 0 到 9，[a-z] 表示 a 到 z
// 例如：匹配从 18 到 65 年龄段所有的人

var reg = /[18-65]/; // 这样写对么
reg.test('50');
// 以上正则会报错：
// Uncaught SyntaxError: Invalid regular expression: /[18-65]/: Range out of order in character class
// 聪明的你想可能是 8-6 这里不对，于是改成 [16-85] 似乎可以匹配 16 到 85 的年龄段的，但实际上发现这也是不靠谱的

// 实际上我们匹配这个 18-65 年龄段的正则我们要拆开来匹配
// 我们拆成3部分来匹配 18-19  20-59 60-65 
reg = /(18|19)|([2-5]\d)|(6[0-5])/;
```

### () 的提高优先级功能：凡是有 | 出现的时候，我们一定要注意是否有必要加上 () 来提高优先级；

1、只要正则中出现了小括号那么就会形成一份分组：

``` javascript
var reg = /hello(\s\w+)/g;
var str = 'hello world';

str.replace(reg, function ($0, $1, $2, $3) {
  console.log($0); // hello world
  console.log($1); //  world
  console.log($2); // 0
  console.log($3); // hello world
});
```

以上 $2 就是 () 子表达式匹配到的字符串

参考 W3C 文档：《[JavaScript replace() 方法](http://www.w3school.com.cn/jsref/jsref_replace.asp)》。

2、重复子项：只要在正则中出现了括号就会形成一个分组，我们可以通过 \n (n是数字代表的是第几个分组)来引用这个分组，第一个小分组我们可以用 \1 来表示，就是第一个小括号内的值（从左向→）, \1+ 表示重复上面捕获组里的内容一次或多次

组的下标从 0 开始，下标为 0 的组就是整个表达式。下标为 1 的组就是从左到右开始的第一个左括号所对应的值，下标为 2 的组就是从左向右第二个左括号对应的值，以此类推，比如：((A)(B)C)D

\\0 ((A)(B)C)D

\\1 ((A)(B)C)

\\2 (A)

\\3 (B)

例如：求出这个字符串 'abAAbcBCCccdaACBDDabcccddddaab' 中出现最多的字母，并求出出现多少次（忽略大小写）：

（1）使用循环遍历的方式：

``` javascript
function findItemByLoop (str) {
  var obj = {};
  for (var i = 0, len = str.length; i < len; i += 1) {
    var cur = str[i].toLowerCase();
    if (obj[cur] === undefined) {
        obj[cur] = 1;
    } else {
        obj[cur] += 1;
    }
  }

  var arr = [];
  for (var prop in obj) {
    var tmp = {};
    tmp[prop] = tmp.num = obj[prop];
    tmp.key = prop;
    arr.push(tmp);
  }

  function compare (a, b) {
    return a.num > b.num
      ? -1
      : a.num < b.num
        ? 1
        : 0;
  }

  arr.sort(compare);

  return '出现最多的字母是：' + arr[0].key + '，共出现了：' + arr[0].num + '次';
}

var res = findItemByLoop(str);
console.log(res);
```

（2）使用正则：

``` javascript
function findItemByReg (str) {
  function compare (a, b) {
    return a.localeCompare(b);
  }

  str = str
    .toLowerCase()
    .split('')
    .sort(compare)
    .join('');

  var reg = /(\w)\1+/ig;
  var maxStr = '';
  var maxLen = 0;
  str.replace(reg, function($0, $1, $2, $3){
    console.log('$0:', $0);
    console.log('$1:', $1);
    console.log('$2:', $2);
    console.log('$3:', $3);
    var regLen = $0.length;
    if (regLen > maxLen) {
      maxLen = regLen;
      maxStr = $1;
    }
  });
  return '出现最多的字母是：' + maxStr + '，共出现了：' + maxLen + '次';
}

var res = findItemByReg(str);
console.log(res);
```

### 正则运算符的优先级

