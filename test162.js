(function () {
  /**
   * 如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
   * 如果没有找到任何匹配的文本， match() 将返回 null。
   * 否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
   * 该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。
   * 除了这些常规的数组元素之外，返回的数组还含有两个对象属性。
   * index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，
   * input 属性声明的是对 stringObject 的引用。
   *
   *
   * 如果 regexp 具有标志 g，则 match() 方法将执行全局检索，
   * 找到 stringObject 中的所有匹配子字符串。
   * 若没有找到任何匹配的子串，则返回 null。
   * 如果找到了一个或多个匹配子串，则返回一个数组。
   * 不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，
   * 而且也没有 index 属性或 input 属性。
   *
   * 注意：在全局检索模式下，match() 既不提供与子表达式匹配的文本的信息，也不声明每个匹配子串的位置。
   * 如果您需要这些全局检索的信息，可以使用 RegExp.exec()。
   *
   * 当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。
   * 它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。
   * 当 exec() 找到了与表达式相匹配的文本时，在匹配后，
   * 它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。
   * 这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。
   * 当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
   */

  var str = "hello123Aworld456Bjavascript";

  var matchRes = str.match(/[0-9]+([A-Z])/g);
  console.log(matchRes);

  console.log("------------");

  var execRes = null;
  // 这个地方一定要把正则定义成变量
  // 直接写在 while 里，会导致死循环
  // 下面的代码，如果把正则写进 while 里，则相当于每次调用新的正则实例，所以返回的结果都一样，
  // while 内条件始终为 true，最终会死循环
  var reg = /[0-9]+([A-Z])/g;
  while ((execRes = reg.exec(str))) {
    console.log(execRes);
    console.log(reg.lastIndex);
  }
  console.log(reg.lastIndex);
})();

(function () {
  // JavaScript高级程序设计-104页 底部 105页上半部分
  // 在 ECMAScript3 中，正则表达式字面量始终会同享同一个 RegExp 实例
  // 使用构造函数创建的 RegExp 实例每次都是一个新实例。
  // ECMAScript5 规定：使用正则表达式字面量，必须像直接调用 RegExp 构造函数一样，每次都创建新的实例

  var str = "hello123Aworld456Bjavascript";
  var reg = null;

  for (var i = 0; i < 10; i++) {
    reg = /[0-9]+([A-Z])/g;
    console.log(reg.test(str)); // true true false true true false true true false true
  }

  console.log("-----------");

  // 如果将 for 循环体内的 reg 放到循环体外，那么也和上面的字面量结果是一样的
  // reg = new RegExp("[0-9]+([A-Z])", "g");
  for (var i = 0; i < 10; i++) {
    reg = new RegExp("[0-9]+([A-Z])", "g");
    console.log(reg.test(str)); // true true true true true true true true true true
  }
})();
