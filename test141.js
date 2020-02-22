;(function () {

  const { DoubleLoopLinkList, Node } = require('./test138')

  /**
   * 最近最少使用算法
   */
  function LRUCache () {
    this.link = new DoubleLoopLinkList()
    this.list = this.initList()
    this.max = 11
  }

  LRUCache.prototype.initList = function initList () {
    const list = []
    const link = this.link
    let node = link.firstNode
    do {
      list.push(node)
      node = node.next
    } while (node !== link.firstNode)
    return list
  }

  LRUCache.prototype.put = function putNode (value) {
    const index = this._has(value)
    if (index !== -1) {
      this.link.remove(value)
      this.link.unshift(new Node(value))
      this.list.splice(index, 1)[0]
      this.list.unshift(this.link.firstNode)
    } else if (this.list.length >= this.max) {
      this.link.pop()
      this.list.pop()
    }
    this.link.push(new Node(value))
    this.list.push(this.link.firstNode.previous)
    return this.list.length
  }

  LRUCache.prototype.get = function getNode (value) {
    const index = this._has(value)
    if (index === -1) {
      return null
    }
    this.link.remove(value)
    this.link.unshift(new Node(value))
    this.list.splice(index, 1)[0]
    this.list.unshift(this.link.firstNode)
    return this.list[0]
  }

  LRUCache.prototype._has = function hasNode (value) {
    return this.list.findIndex(node => node.value === value)
  }

  const cache = new LRUCache()
  cache.put(11)
  console.log(cache.list)
  console.log(cache.link)
  cache.get(4)
  console.log(cache.link)
  cache.get(4)
  console.log(cache.link)
  cache.get(3)
  console.log(cache.link)

})();