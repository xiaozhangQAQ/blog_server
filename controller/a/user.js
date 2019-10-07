const {sel_user,add_user,up_user,get_user_info} = require('../../model/a/user');
const {decode_aes128,encode_aes128} = require('../../utils/code');
const {creat_token,check_token} = require('../../utils/token');
const uuid = require('node-uuid');  

//模拟添加数据
// const username = 'zjm';
// const newpassword = encode_aes128('zjm627399');
// const status = 0;
// add_user({id:uuid.v1(),username,newpassword,status}).then(reponse => {
//     console.log(reponse)
    
// }).catch(e => {
//     // res.json({err:e})
//     console.log('ell')
// })

const user = {
    login: async (req, res) =>{
        const {username, password} = req.body;
        // const newpassword = decode_aes128(password);
        // const token_val = creat_token(password);
        await sel_user({username}).then(reponse => {
            if(reponse.length){
                if(decode_aes128(reponse[0].password) === password){
                    const token_val = creat_token({user_id:reponse[0].user_id});
                    if (!token_val) {
                        return res.json({
                            code: 60204,
                            message: '登录失败，请确认账号密码是否填写正确.'
                        })
                    }
                    up_user({token_val,user_id:reponse[0].user_id}).then(reponse=>{
                        return res.json({ data:{token:token_val},code: 20000});
                    })
                }else{
                    return res.json({ message:"密码错误.",code:60204});
                }
            }else{
                return res.json({ message:"用户不存在.",code:60204});
            }
        }).catch(e => {
            return res.json({ err:e});
        })
    },
    getUserInfo:async (req,res,next) => {
       check_token(req,res);
       console.log(req.query.token)
       if(req.decoded){
            await get_user_info({user_id:req.decoded.user_id}).then(reponse =>{
                console.log(reponse)
                let info={};
                info.user_id = reponse[0].user_id;
                info.roles = reponse[0].roles.split(',');
                info.introduction = reponse[0].introduction;
                info.avatar = reponse[0].avatar;
                info.name = reponse[0].name;
                return res.json({ code: 20000,
                    data: info});
            })
       }
       
       
    },
    logout: (req,res) => {
        res.json( {
            code: 20000,
            data: 'success'
        });
    }
}

module.exports = user;