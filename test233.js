;(function () {

  const ast = {
    tag: 'div',
    children: [{
      tag: 'p',
      children: [{
        tag: 'span',
        expression: "a+b"
      }]
    }, {
      tag: 'div'
    }]
  }

  function isStatic (node) {
    return !node.expression
  }

  function optimize (node) {
    node.static = isStatic(node)
    Array.isArray(node.children) && node.children.forEach(child => {
      optimize(child)
      if (!child.static) {
        node.static = false
      }
    })
    return node
  }

  function generate (ast) {
    const code = ast ? genElement(ast) : '_c("div")'
    return {
      render: ('with(this){return ' + code + '}')
    }
  }

  function genElement (el) {
    const children = genChildren(el)
    const code = "_c('" + (el.tag) + "'" + (children ? ("," + children) : '') + ")"
    return code
  }

  function genChildren (el) {
    const children = el.children
    if (Array.isArray(children)) {
      return '[' + children.map(c => genNode(c)).join(',') + ']'
    }
  }

  function genNode (node) {
    return genElement(node)
  }

  optimize(ast)
  console.log('ast: ', ast)
  console.log(generate(ast))

})();