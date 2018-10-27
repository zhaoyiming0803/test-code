;(function () {
    
    var tree = [
        {
            id: 1,
            parent_id: 0,
            checked: false,
            children: [
                {
                    id: 2,
                    parent_id: 1,
                    checked: false
                },
                {
                    id: 3,
                    parent_id: 1,
                    checked: false,
                    children: [
                         {
                            id: 4,
                            parent_id: 3,
                            checked: true
                        }
                    ]
                }
            ]
        }
    ];

    function handleParent (parent, arr) {
        for (var i = 0, len = arr.length; i < len; i += 1) {
            if (Array.isArray(arr[i].children) && arr[i].children.length) {
                handleParent(arr[i], arr[i].children);
            }
            if (parent && arr[i].checked === true) {
                parent.checked = true;
            }
        }
    }

    handleParent(null, tree);

    console.log(tree);

})();