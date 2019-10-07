let crypto=require('crypto');
const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');

const  decode_aes128= (data)=>{
    let decryped='';
    let decipher = crypto.createDecipheriv('aes-128-cbc', key,iv);//解密
    decryped += decipher.update(data, 'hex', 'utf8');
    decryped += decipher.final('utf8');
    decryped = decryped.replace(/"/g, ''); 
    return decryped
    // 如果想要异步，就返回promise
    // return new Promise((resolve,reject)=>{
    //     resolve(decryped)
    // })
}

const  encode_aes128= (data)=> {
    var cryped = '';
    var plaintext = JSON.stringify(data);
    var cipher = crypto.createCipheriv('aes-128-cbc', key,iv);//加密
    cryped += cipher.update(plaintext, 'utf8', 'hex');
    cryped += cipher.final('hex');
    
    return cryped
    // 如果想要异步，就返回promise
    // return new Promise((resolve,reject)=>{
    //     resolve(cryped)
    // })
}

module.exports = {
    decode_aes128,
    encode_aes128
}