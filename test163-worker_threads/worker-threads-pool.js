/**
 * worker threads pool
 * reference: https://github.com/watson/worker-threads-pool
 */

const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads')
const {AsyncResource} = require('async_hooks')

class Pool {
  constructor (opts) {
    opts = opts || {}
    this._workers = new Set()
    this._queue = []
    this._max = opts.max || 1
  }

  get size () {
    return this._workers.size
  }

  acquire (filename, opts, cb) {
    if (typeof opts === 'function') return this.acquire(filename, undefined, opts)
    if (this.size === this._max) {
      this._queue.push(new QueuedWorkerThread(this, filename, opts, cb))
      return
    }

    const self = this

    const worker = new Worker(filename, opts)
    worker.once('error', done)
    worker.once('exit', done)

    this._workers.add(worker)

    process.nextTick(cb.bind(null, null, worker))

    function done () {
      self._workers.delete(worker)
      worker.removeListener('error', done)
      worker.removeListener('exit', done)
      const resource = self._queue.shift()
      if (resource) resource.addToPool()
    }
  }
}

class QueuedWorkerThread extends AsyncResource {
  constructor (pool, filename, opts, cb) {
    super('worker-threads-pool:enqueue')
    this.pool = pool
    this.filename = filename
    this.opts = opts
    this.cb = cb
  }

  addToPool () {
    this.pool.acquire(this.filename, this.opts, (err, worker) => {
      this.runInAsyncScope(this.cb, null, err, worker)
    })
  }
}

module.exports = Pool