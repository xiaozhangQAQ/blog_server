const qiniu = require('qiniu');
const config = require('../config/qiniu')

const getQnToken = () => {
    const accessKey = config.accessKey // 你的七牛的accessKey
     const secretKey = config.secretKey // 你的七牛的secretKey
     const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
     const options = {
      scope: config.bucket, // 你的七牛存储对象
      returnBody: '{"code":20000,"data":{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}}'
     }
     const putPolicy = new qiniu.rs.PutPolicy(options)
     const uploadToken = putPolicy.uploadToken(mac)
    return uploadToken;
}

module.exports = {
    getQnToken
}