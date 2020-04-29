~(function () {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1");
    }, 1000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
    }, 2000);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error p3");
    }, 3000);
  });

  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p4");
    }, 4000);
  });

  function runTask(tasks, success, fail) {
    const len = tasks.length;
    const res = [];
    for (let i = 0; i < len; i++) {
      const task = tasks[i];
      task.then(
        (_res) => {
          res.push(_res);
          if (res.length === len) {
            success(res);
          }
        },
        (error) => {
          fail(error);
        }
      );
    }
  }

  runTask(
    [p1, p2, p3, p4],
    function (res) {
      console.log("res: ", res);
    },
    function (error) {
      console.log("error: ", error);
    }
  );
})();
