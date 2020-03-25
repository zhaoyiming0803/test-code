// const Pool = require('worker-threads-pool')

// const pool = new Pool({ max: 2 })

// function run () {
//   for (let i = 1; i <= 10; i++) {
//     pool.acquire('./sum-thread.js', function (err, worker) {
//       // if (err) throw err
//       // console.log(`started worker ${ i } (pool size: ${ pool.size })`)
//       worker.postMessage(i)
//       worker.on('message', data => {
//         console.log(`worker ${ i } data: `, data)
//       })
//       worker.on('exit', function () {
//         // console.log(`worker ${ i } exited (pool size: ${ pool.size })`)
//         console.log(pool._queue)
//       })
//     })
//   }
// }

// setInterval(run, 1000)


const { WorkerPool } = require('@shahidcodes/threadifier');

const pool = new WorkerPool(1);

function runTask(args) {
  let i = 0;
  for (let index = 0; index < 10; index++) {
    i++;
  }
  return { i, args };
}

const args = { };

setInterval(() => {
  pool
    .queueTask(runTask, args)
    .then(result => console.log(`from worker:`, result))
    .catch(console.error);
}, 10)