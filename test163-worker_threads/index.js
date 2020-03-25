;(function () {

  // nodejs 本身的异步非阻塞 IO 已经能很好的支持 IO 密集型任务了
  // child thread 一般用在计算密集型任务中

  const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads')

  function sum (value) {
    if (value === 0) {
      return 0
    }
    return value + sum(value-1)
  }

  if (isMainThread) {
    const worker1 = new Worker(__filename, {
      workerData: 10
    })

    worker1.on('message', data => {
      console.log('worker1 message: ', data)
    })

    const worker2 = new Worker(__filename, {
      workerData: 20
    })
    worker2.on('message', data => {
      console.log('worker2 message: ', data)
    })

    console.log('main thread')
  } else {
    parentPort.postMessage(sum(workerData))
  }

})();