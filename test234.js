;(function () {

  const obj1 = {
    name: 'obj1'
  }

  const obj2 = {
    name: 'obj2'
  }

  const obj3 = {
    name: 'obj3'
  }

  const queue = [0, 1, 2, obj2]

  console.log(queue.indexOf(obj1)) // -1
  console.log(queue.indexOf(obj2)) // 3
  console.log(queue.indexOf(obj3)) // 1

})();