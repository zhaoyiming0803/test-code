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

  function genElement (node) {
    return `_c(${node.tag})`
  }

  function genNode (node) {
    let exp = ''
    if (Array.isArray(node.children)) {
      exp += genChildren(node.children)
    }
    exp += genElement(node)
    return exp
  }

  console.log(genNode(ast))

})();