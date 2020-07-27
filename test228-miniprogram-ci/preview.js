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

  const previewResult = await ci.preview({
    project,
    desc: 'hello', // 此备注将显示在“小程序助手”开发版列表中
    setting: {
      es6: true,
    },
    qrcodeFormat: 'image',
    qrcodeOutputDest: path.resolve('./images/qrcode.jpg'),
    onProgressUpdate: console.log
  })

  console.log('previewResult: ', previewResult)
})()