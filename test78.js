;(function () {

  var source = `
    body {
      font-size: 14px;
      background-image: url('../images/logo.png');
      color: #000;
    }

    .container {
      background-image: url('../images/bg.png');
    }
  `;

  function transformCss (source) {
    var reg = /url\((.*?)\)/g;
    var arr = ['var list = [];'];
    var index = 0;
    var res = null;

    while (res = reg.exec(source)) {
      var lastIndex = reg.lastIndex;
      var strPath = res[1];
      arr.push(`list.push(${JSON.stringify(source.slice(index, res.index))})`);
      if (!/^(http|https)/.test(strPath)) {
        arr.push(`list.push('url('+require(${strPath})+')')`);
      } else {
        arr.push(`list.push('url('+${strPath}+')')`);
      }
      index = lastIndex;
    }

    arr.push(`list.push(${JSON.stringify(source.slice(index))})`);

    return arr.join('\r\n');
  }

  console.log(transformCss(source));
  
})();