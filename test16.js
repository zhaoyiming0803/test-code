;(function () {
    
    var cityList = [
        {id: 1, pid: 0, name: '北京市'},
        {id: 2, pid: 1, name: '朝阳区'},
        {id: 3, pid: 1, name: '东城区'},
        {id: 4, pid: 0, name: '山西省'},
        {id: 5, pid: 4, name: '太原市'},
        {id: 6, pid: 5, name: '杏花岭区'}
    ];

    function formatCity (arr, pid) {
        var pid = pid || 0;
        var newArr = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (arr[i].pid === pid) {
                arr[i].children = formatCity(arr, arr[i].id);
                newArr = newArr.concat(arr[i]);
            }
        }
        return newArr;
    }

    var cityTree = formatCity(cityList);
    console.log(cityTree);

    function getCityList (cityTree) {
        var arr = [];
        for (var i = 0; i < cityTree.length; i += 1) {
            arr.push({
                id: cityTree[i].id,
                pid: cityTree[i].pid,
                name: cityTree[i].name
            });
            if (cityTree[i].children && cityTree[i].children.length) {
                arr = arr.concat(getCityList(cityTree[i].children));
            }
        }
        return arr;
    }

    var cityList = getCityList(cityTree);
    console.log(cityList);

})();