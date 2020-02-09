; (function () {

  var firstNode = null
  var num = 1

  function createNewNode (num) {
    return {
      expirationTime: num,
      next: null,
      previous: null
    }
  }

  function createLink () {
    firstNode = createNewNode(num)
    var node = firstNode
    while (node.next === null) {
      if (num >= 10) {
        node.next = firstNode
        firstNode.previous = node
        break
      }
      num += 1
      var newNode = createNewNode(num)
      newNode.previous = node
      node.next = newNode
      node = node.next
    }
  }

  createLink()

  console.log(firstNode)

  function insertNode () {
    var random = 0
    var newNode = createNewNode(random)
    var node = firstNode
    var next = null
    do {
      if (node.expirationTime > random) {
        next = node
        break
      }
      node = node.next
    } while (node !== firstNode)

    if (next === null) {
      // latest
      next = firstNode
    } else if (next === firstNode) {
      // earlest
      firstNode = newNode
    }

    var previous = next.previous
    previous.next = next.previous = newNode;
    newNode.previous = previous
    newNode.next = next
  }

  insertNode()

  console.log(firstNode)
})();