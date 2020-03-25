;(function () {

  const {
    parentPort, workerData
  } = require('worker_threads')
  
  function sum (value) {
    if (value === 0) {
      return 0
    }
    return value + sum(value-1)
  }

  // parentPort.postMessage(sum(workerData))

})();