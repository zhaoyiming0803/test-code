const qiniu = require('qiniu');

const accessKey = 'xxx';
const secretKey = 'xxx';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
  scope: 'zhaoyiming-qiniu',
  // callbackUrl: 'http://api.example.com/qiniu/upload/callback',
  // callbackBody: 'key=$(key)&hash=$(etag)&bucket=$(bucket)&fsize=$(fsize)&name=$(x:name)'
}
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken= putPolicy.uploadToken(mac);

const config = new qiniu.conf.Config();

const localFile = "./images/love.jpg";
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const key='test/love.jpg';

// 文件上传成功之后的路径
// http://cdn.0351zhuangxiu.com/${key}
formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log('respBody: ', respBody);
  } else {
    console.log('statusCode: ', respInfo.statusCode);
    console.log('respBody: ', respBody);
  }
});