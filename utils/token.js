const jwt = require('jsonwebtoken');
const secret = 'zjm' 

const  creat_token= (data)=>{
    const token_val = jwt.sign(data, secret, { expiresIn: 60*60*24  });
    return token_val;
}

const  check_token= (req,res,next)=>{
    let token = req.body.token || req.query.token || req.headers['x-token'];
    if(token){
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {  //  时间失效的时候/ 伪造的token          
                return res.json({
                    code:50014,
                    message:'token过期！请重新登录'
                })         
            }else{
                req.decoded = decoded;             
            }  
            // console.log(new Date(parseInt(decode.exp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '),new Date(parseInt(decode.iat) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '))
        
        })
    }else{
        return res.json({ code: 50008,
            message: '找不到token'});
    }
    // console.log(vv)
    // return ;
}

module.exports = {
    creat_token,
    check_token
}