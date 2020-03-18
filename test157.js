;(function () {

  var style = 'width: 100px; height: 100px; font-size: 30px; font-weight: 500;'

  function handler (style) {
    return style.replace(/\s+/g, '')
      .replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase())
  }

  console.log(handler(style))

})();

;(function () {

  var style = 'width: 100px; height: 100px; fontSize: 30px;fontWeight: 500;'

  function handler (style) {
    return style.replace(/([A-Z])/g, ($0, $1) => '-' + $1.toLowerCase())
  }

  console.log(handler(style))

})();