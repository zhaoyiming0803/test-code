; (function () {

  const deepCopy = require('./test11')

  function isPrimitiveObject (field) {
    return Object.prototype.toString.call(field) === '[object Object]'
  }

  function isArray (field) {
    return Array.isArray(field)
  }

  function isUnDef (field) {
    return field == null || field == undefined
  }

  const SEPARATOR = '.'
  const SUBSEPARATOR = ':'
  const REACT_ELEMENT_TYPE = 'react.element'

  function mapChildren (children, func) {
    if (children == null) {
      return children
    }

    const result = []
    traverseAllChildren(children, result, '', func)
    return result
  }

  function traverseAllChildren (children, result, prefix, func) {
    if (children == null) {
      return
    }

    return traverseAllChildrenImpl(children, prefix, result, func)
  }

  function traverseAllChildrenImpl (children, prefix, result, callback) {
    if (children.$$typeof === REACT_ELEMENT_TYPE) {
      const wrappedChild = callback(children)
      if (isArray(wrappedChild)) {
        traverseAllChildrenImpl(wrappedChild, prefix + '/.', result, node => node)
      } else if (wrappedChild) {
        const clonedChild = deepCopy(wrappedChild)
        clonedChild.key = prefix
        result.push(clonedChild)
      }
      return
    }

    let child = null
    let nextName = ''
    let nextNamePrefix = prefix === ''
      ? SEPARATOR
      : prefix + (prefix.charAt(prefix.length - 1) === '.' ? '' : SUBSEPARATOR)

    if (isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        child = children[ i ]
        nextName = nextNamePrefix + i
        traverseAllChildrenImpl(child, nextName, result, callback)
      }
    } else {
      children.key = prefix
      result.push(children)
    }
  }

  const nodeList = [ {
    $$typeof: REACT_ELEMENT_TYPE,
    type: "div",
    key: null,
    props: { children: 'a' }
  }, {
    $$typeof: REACT_ELEMENT_TYPE,
    type: "div",
    key: null,
    props: { children: 'b' }
  }, {
    $$typeof: REACT_ELEMENT_TYPE,
    type: "div",
    key: null,
    props: { children: 'c' }
  } ]

  console.log(mapChildren(nodeList, node => [ node, [ node, [ node ] ], [ node ] ]))

})();