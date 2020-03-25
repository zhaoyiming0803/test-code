// nodejs 本身的异步非阻塞 IO 已经能很好的支持 IO 密集型任务了
// child thread 一般用在计算密集型任务中

const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads')

const threadPool = Array.from({ length: 4 }).map((v, k) => new Worker('./sum-thread.js'))

const http = require('http')

const server = http.createServer((req, res) => {
  const query = {}
  req.url.replace(/([a-z]+)=(\d+)/g, ($0, $1, $2) => {
    query[ $1 ] = $2
  })

  if (threadPool.length <= 2) {
    threadPool.push(new Worker('./sum-thread.js'))
  }

  const worker = threadPool.shift()

  worker.postMessage(query.value)

  worker.on('message', data => {
    console.log('worker message: ', data)
    console.log('worker length: ', threadPool.length)
    res.writeHead(200)
    res.end('callback(' + data + ')')
  })

  worker.on('exit', data => {
    console.log('exit: ', data)
  })

  console.log('main thread')
})

server.listen(3001, () => console.log('server listen at port 3001 successfully'))