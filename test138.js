; (function () {

  function Node (expirationTime) {
    this.expirationTime = expirationTime
    this.next = null
    this.previous = null
  }

  function DoubleLoopLinkList () {
    this.firstNode = null
    this.init()
  }

  DoubleLoopLinkList.prototype.init = function () {
    const MAX = 9
    let num = 0
    let node = this.firstNode || (this.firstNode = new Node(num))
    while (node.next === null) {
      if (num >= MAX) {
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
  }

  DoubleLoopLinkList.prototype.pop = function popNode () {
    const firstNode = this.firstNode
    const lastNode = firstNode.previous
    firstNode.previous = lastNode.previous
    lastNode.previous.next = firstNode
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
  }

  DoubleLoopLinkList.prototype.shift = function shiftNode () {
    const firstNode = this.firstNode
    const lastNode = firstNode.previous
    lastNode.next = firstNode.next
    firstNode.next.previous = lastNode
    this.firstNode = lastNode.next
    return firstNode
  }

  /**
   * 任意位置后面添加节点
   */
  DoubleLoopLinkList.prototype.add = function addNode (expirationTime, newNode) {
    const node = this.findNodeByExpirationTime(expirationTime)
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
    }
  }

  /**
   * 任意位置移出节点
   */
  DoubleLoopLinkList.prototype.remove = function removeNode (expirationTime) {
    const node = this.findNodeByExpirationTime(expirationTime)
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
    return node
  }

  DoubleLoopLinkList.prototype.findNodeByExpirationTime = function findNodeByExpirationTime (expirationTime) {
    let node = this.firstNode
    do {
      if (node.expirationTime === expirationTime) {
        break
      }
      node = node.next
    } while (node !== this.firstNode)

    return node === this.firstNode ? null : node
  }

  const doubleLoopLink = new DoubleLoopLinkList()
  doubleLoopLink.push(new Node(Math.random()))
  doubleLoopLink.pop()
  doubleLoopLink.unshift(new Node(12345))
  doubleLoopLink.shift()
  console.log(doubleLoopLink)

})();