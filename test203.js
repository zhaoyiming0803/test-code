~(function () {
  // 导致进程退出

  // console.log(a);
  // const b = 2;
  // console.log(b);

  // Promise.reject(222);

  Promise.reject(222).catch((error) => {
    console.log(error);
  });
})();
