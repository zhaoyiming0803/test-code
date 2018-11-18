;(function () {
    
  var arr1 = [
    {
      node_name: '1',
      enable: false,
      sub_nodes: [
        { node_name: '1-1', enable: false },
        { node_name: '1-2', enable: false},
        { node_name: '1-3', enable: false },
        { node_name: '1-5', enable: false }
      ]
    },
    {
      node_name: '2',
      enable: false,
      sub_nodes: [
        { node_name: '2-1', enable: false },
        { node_name: '2-2', enable: false},
        { node_name: '2-3', enable: false }
      ]
    },
    {
      node_name: '4',
      enable: false,
      sub_nodes: [
        { node_name: '4-1', enable: false },
        { node_name: '4-2', enable: false},
        { node_name: '4-3', enable: false }
      ]
    }
  ];

  var arr2 = [
    {
      node_name: '1',
      enable: true,
      sub_nodes: [
        { node_name: '1-1', enable: true },
        { node_name: '1-2', enable: false},
        { node_name: '1-3', enable: false },
        { node_name: '1-4', enable: true }
      ]
    },
    {
      node_name: '2',
      enable: true
    },
    {
      node_name: '3',
      enable: true,
      sub_nodes: [
        { node_name: '2-1', enable: false },
        { node_name: '2-2', enable: true},
        { node_name: '2-3', enable: false }
      ]
    }
  ];

  function mergeNodes (parent, child) {
    removeNodes(parent, child);
    addNodes(parent, child);
  }

  function removeNodes (parent, child) {
    for (var i = 0, childLen = child.length; i < childLen; i += 1) {
      var curChildNode = child[i];
      var curParentNode = parent.filter(item => item.node_name === curChildNode.node_name)[0];
      if (curParentNode !== undefined) {
        var hasParentSubNodes = Array.isArray(curParentNode.sub_nodes) && curParentNode.sub_nodes.length;
        var hasChildSubNodes = Array.isArray(curChildNode.sub_nodes) && curChildNode.sub_nodes.length;
        if (hasParentSubNodes && hasChildSubNodes) {
          removeNodes(curParentNode.sub_nodes, curChildNode.sub_nodes);
        } else if (hasParentSubNodes && !hasChildSubNodes) {
          child[i].subNodes = curParentNode.sub_nodes;
        }
      } else {
        child.splice(i);
      }
    }
  }

  function addNodes (parent, child) {
    for (var j = 0, parentLen = parent.length; j < parentLen; j += 1) {
      var curParentNode = parent[j];
      var curChildNode = child.filter(item => item.node_name === curParentNode.node_name)[0];
      if (curChildNode !== undefined) {
        var hasParentSubNodes = Array.isArray(curParentNode.sub_nodes) && curParentNode.sub_nodes.length;
        var hasChildSubNodes = Array.isArray(curChildNode.sub_nodes) && curChildNode.sub_nodes.length;
        if (hasParentSubNodes && hasChildSubNodes) {
          addNodes(curParentNode.sub_nodes, curChildNode.sub_nodes);
        }
      } else {
        child.push(curParentNode);
      }
    }
  }

  mergeNodes(arr1, arr2);

  console.log('arr1', arr1);
  console.log('arr2', arr2);
  
})();