const acorn = require("acorn");

const code1 = `const fn = (a, b) => a + b`
const code2 = `import $ from 'jquery'; const a = 123;`
const code3 = `function fn () {}; fn()`

console.log(acorn.parse(code3, {
  ecmaVersion: 2020,
  sourceType: 'script'
}))