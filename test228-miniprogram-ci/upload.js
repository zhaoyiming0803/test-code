const ci = require('miniprogram-ci')
const path = require('path')
const {appid} = require('./config')

;(async () => {
  const project = new ci.Project({
    appid,
    type: 'miniProgram',
    projectPath: 'wxApp',
    privateKeyPath: path.resolve('./private.wx2233cfeacd62ed7b.key'),
    ignores: ['node_modules/**/*'],
  })

  const uploadResult = await ci.upload({
    project,
    version: '1.1.1',
    desc: 'hello',
    setting: {
      es6: true,
    },
    onProgressUpdate: console.log,
  })
  console.log('uploadResult: ', uploadResult)
})()