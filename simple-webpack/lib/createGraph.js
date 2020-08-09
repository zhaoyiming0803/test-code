const path = require('path')
const createAssets = require('./createAssets')

function createGraph (entry) {
  const mainAsset = createAssets(entry)
  const queue = [mainAsset]
  let i = 0
  while (i < queue.length) {
    const asset = queue[i++]
    const dirname = path.dirname(asset.filename)
    asset.mapping = {}
    asset.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath)
      const child = createAssets(absolutePath)
      asset.mapping[relativePath] = child.id
      queue.push(child)
    })
  }
  return queue
}

// console.log(createGraph('./example/index.js'))

module.exports = createGraph