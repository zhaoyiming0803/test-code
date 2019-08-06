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
    var reg = /url\((.+?)\)/img;
    var res = null;
    var arr = ['var list = []'];
    var index = 0;

    while (res = reg.exec(source)) {
      var [matchedStr, sourcePath] = res;
      arr.push(`list.push(${JSON.stringify(source.slice(index, res.index))})`);
      if (/https?:\/\//img.test(sourcePath)) {
        arr.push(`list.push('url('+ ${sourcePath} +')')`);
      } else {
        arr.push(`list.push('url('+ require(${sourcePath}) +')')`);
      }
      index = reg.lastIndex;
    }
    arr.push(`list.push(${JSON.stringify(source.slice(index))})`);

    return arr.join('\r\n');
  }

  console.log(transformCss(source));
  
})();