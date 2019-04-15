;(function () {

    // escape 对非 url 字符串编码
  
    var str = 'hello zymfe';
  
    var escapedStr = escape(str);
    console.log(escapedStr);
  
    var unescapedStr = unescape(escapedStr);
    console.log(unescapedStr);
  
  
    // encodeURI 和 encodeURIComponent 对 url 字符串编码
    // encodeURI方法不会对下列字符编码  ASCII 字母、数字、~!@#$&*()=:/,;?+'
    // encodeURIComponent方法不会对下列字符编码 ASCII 字母、数字、~!*()'
    // 所以 encodeURIComponent 比 encodeURI 编码的范围更大。
  
    var url = 'http://www.zymseo.com?message=hello zym';
  
    var encodedUrl1 = encodeURI(url);
    console.log(encodedUrl1);
  
    var decodedUrl1 = decodeURI(encodedUrl1);
    console.log(decodedUrl1);
  
    var encodedUrl2 = encodeURIComponent(url);
    console.log(encodedUrl2);
  
    var decodedUrl2 = decodeURIComponent(encodedUrl2);
    console.log(decodedUrl2);
  
    // 什么场合适合使用什么方法？
    // 1、如果只是编码字符串，和 URL 没有关系，那么用escape。
    // 2、如果你需要编码整个 URL，然后需要使用这个 URL ，那么用 encodeURI。
    // 3、当你需要编码 URL 中的参数的时候，那么 encodeURIComponent 是最好方法。
  
  })();