const str = `
  var a = 1;
  var b = 2;
  var c = a + b;
  console.log(c)
  if (a > 100) {
    console.log(true)
  } else {
    console.log(false)
  }
`

const uglify = require('uglify-js')

function _uglify (input) {
  try {
    let source = uglify.parser.parse(input);
    source = uglify.uglify.ast_mangle(source);
    source = uglify.uglify.ast_squeeze(source);
    source = uglify.uglify.gen_code(source);
    console.log('source: ', source)
  } catch(e) {
    console.error(" @ Line " + e.line + ", Col " + e.col + ", " + e.message);
  }
}

_uglify(str)