;(function () {

  const list = [];

  const getList = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([1, 2, 3, 4, 5]);
      }, 2000);
    });
  }

  
  const notify = async () => {
    if (!list.length) {
      list.push.apply(list, await getList());
    }
    return list;
  }

  notify().then(res => {
    console.log(res);
  });

})();