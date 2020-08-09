const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

let moduleId = 0

function createAssets (filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
      sourceType: 'module'
  })
  // console.log('ast', ast)
  
  const dependencies = []

  traverse(ast, {
    CallExpression ({node}) {
      if (node.callee.name === 'require') {
        const moduleName = path.extname(node.arguments[0].value) ? node.arguments[0].value : (node.arguments[0].value + '.js')
        node.arguments[0].value = moduleName
        dependencies.push(moduleName)
      }
    },
    ImportDeclaration ({node}) {
      const moduleName = path.extname(node.source.value) ? node.source.value : (node.source.value + '.js')
      node.source.value = moduleName
      dependencies.push(moduleName)
    }
  })

  const code = babel.transformFromAstSync(ast, null, {
    presets: ["@babel/preset-env"]
  })

  // console.log('code: ', code)
  return {
    id: moduleId++,
    dependencies,
    code,
    filename
  }
}

// console.log(createAssets('./assets/index.js'))

module.exports = createAssets