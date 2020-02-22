; (function () {

  const { DoubleLoopLinkList, Node } = require('./test138')

  /**
   * 先进先出算法
   */
  function FIFOCache () {
    this.link = new DoubleLoopLinkList()
    this.list = this.initList()
    this.max = 10
  }

  FIFOCache.prototype.initList = function initList () {
    const list = []
    const link = this.link
    let node = link.firstNode
    do {
      list.push(node)
      node = node.next
    } while (node !== link.firstNode)
    return list
  }

  FIFOCache.prototype.put = function putNode (value) {
    if (this.list.find(node => node.value === value)) {
      return
    }
    if (this.list.length >= this.max) {
      this.link.shift()
      this.list.shift()
    }
    const node = new Node(value)
    this.link.push(node)
    this.list.push(node)
  }

  FIFOCache.prototype.remove = function removeNode (value) {
    const index = this.list.findIndex(node => node.value === value)
    if (index === -1) {
      return
    }
    const _value = this.list[index]
    this.link.remove(_value)
    this.list.splice(index, 1)
  }

  const cache = new FIFOCache()
  cache.put(200)
  console.log(cache.list)
  console.log(cache.link)
  // cache.put(5)
  // console.log(cache.list)
  // console.log(cache.link)
  // cache.remove(5)
  // console.log(cache.list)
  // console.log(cache.link)

})();
