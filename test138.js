const link = (function () {

  function Node (value) {
    this.value = value
    this.next = null
    this.previous = null
  }

  function DoubleLoopLinkList (size = 10) {
    this.firstNode = null
    this.init(size)
    this.size = size
  }

  DoubleLoopLinkList.prototype.init = function (size) {
    let num = 1
    let node = this.firstNode || (this.firstNode = new Node(num))
    while (node.next === null) {
      if (num >= size) {
        node.next = this.firstNode
        this.firstNode.previous = node
        break
      }
      const newNode = new Node(++num)
      newNode.previous = node
      node.next = newNode
      node = node.next
    }
  }

  DoubleLoopLinkList.prototype.push = function pushNode (node) {
    const firstNode = this.firstNode
    const previous = firstNode.previous
    node.previous = previous
    node.next = firstNode
    previous.next = node
    firstNode.previous = node
    this.size++
  }

  DoubleLoopLinkList.prototype.pop = function popNode () {
    const firstNode = this.firstNode
    const lastNode = firstNode.previous
    firstNode.previous = lastNode.previous
    lastNode.previous.next = firstNode
    this.size--
    return lastNode
  }

  DoubleLoopLinkList.prototype.unshift = function unshiftNode (node) {
    const firstNode = this.firstNode
    const lastNode = firstNode.previous
    lastNode.next = node
    node.previous = lastNode
    node.next = firstNode.next
    firstNode.next.previous = node
    this.firstNode = node
    this.size++
  }

  DoubleLoopLinkList.prototype.shift = function shiftNode () {
    const firstNode = this.firstNode
    const lastNode = firstNode.previous
    lastNode.next = firstNode.next
    firstNode.next.previous = lastNode
    this.firstNode = lastNode.next
    this.size--
    return firstNode
  }

  /**
   * 任意位置后面添加节点
   */
  DoubleLoopLinkList.prototype.add = function addNode (value, newNode) {
    const node = this.findNode(value)
    if (node === null) {
      return
    }
    if (node.next === this.firstNode) {
      this.push(newNode)
    } else {
      const next = node.next
      node.next = next.previous = newNode
      newNode.previous = node
      newNode.next = next
      this.size++
    }
  }

  /**
   * 任意位置移出节点
   */
  DoubleLoopLinkList.prototype.remove = function removeNode (value) {
    const node = this.findNode(value)
    if (node === null) {
      return null
    }
    if (node === this.firstNode) {
      return this.shift()
    }
    if (node === this.firstNode.previous) {
      return this.pop()
    }
    const previous = node.previous
    const next = node.next
    previous.next = next
    next.previous = previous
    this.size--
    return node
  }

  DoubleLoopLinkList.prototype.findNode = function findNode (value) {
    let node = this.firstNode
    do {
      if (node.value === value) {
        return node
      }
      node = node.next
    } while (node !== this.firstNode)

    if (node === this.firstNode) {
      return null
    }
  }

  return { DoubleLoopLinkList, Node }

})();

module.exports = link
