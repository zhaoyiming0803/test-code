;(function () {

  var cityTree = [
    {
      name: '北京市',
      children: [{
          name: '东城区',
          children: [{
            name: '雍和宫',
            children: [{
                name: '雍和宫地铁站'
              },
              {
                name: '雍和大厦'
              }
            ]
          }]
        },
        {
          name: '西城区'
        },
        {
          name: '通州区',
          children: [{
            name: '物资学院路地铁站'
          }]
        }
      ]
    }
  ];

  function depthTraversal(tree) {
    var list = [];
    tree.forEach(item => {
      list.push(item.name);
      if (Array.isArray(item.children)) {
        list = list.concat(depthTraversal(item.children));
      }
    });
    return list;

  }

  console.time('depth');
  console.log(depthTraversal(cityTree));
  console.timeEnd('depth');

  function breadthTraversal(tree) {
    var list = [];

    function next(tree) {
      var tmp = [];

      tree.forEach(item => {
        list.push(item.name);
        tmp.push(item);
      });

      tmp.forEach(item => {
        if (Array.isArray(item.children)) {
          next(item.children);
        }
      });
    }
    next(tree);

    return list;

  }

  console.time('breadth');
  console.log(breadthTraversal(cityTree));
  console.timeEnd('breadth');

  // 深度优先算法采用栈的方式，有回溯操作，不会保留全部节点，占用空间少，但运行速度较慢。

  // 广度优先算法采用队列的方式，无回溯操作，保留全部节点，运行速度较快，但占用空间较多。

  // 深度优先算法和广度优先算法的时间复杂度都是O(n2)，n为节点数。
})();