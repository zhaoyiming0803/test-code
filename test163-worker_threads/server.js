// nodejs 本身的异步非阻塞 IO 已经能很好的支持 IO 密集型任务了
// child thread 一般用在计算密集型任务中

const { WorkerPool } = require('@shahidcodes/threadifier');
const http = require('http')
const pool = new WorkerPool(1)

function sum (value) {
  console.log('value: ', value)
  return {}
}

const server = http.createServer((req, res) => {
  const query = {}
  req.url.replace(/([a-z]+)=(\d+)/g, ($0, $1, $2) => {
    query[ $1 ] = $2
  })

  pool
    .queueTask(sum, +query.value)
    .then(result => console.log(`from worker:`, result))
    .catch(console.error);
})

server.listen(3001, () => console.log('server listen at port 3001 successfully'))