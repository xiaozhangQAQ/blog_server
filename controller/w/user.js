const loginModel = require('../../model/w/user/index');
const md5 = require("md5");

const user = {
    login: async (req, res) =>{
        const {name, password} = req.body;
        console.log(req.body);
        await loginModel({name, password: password}).then(reponse => {
            console.log(reponse)
            res.json({ data:{ name: 'aaab', pwd: '123' },code:200});
            // if (data.length) {
            //     const tokenData = {
            //         name: data[0].user_name,
            //         password: data[0].password,
            //         phone: data[0].phone,
            //         user_uid: data[0].user_uid
            //     };
            //     res.end(resJson.returnSuccess({token: tokenUtils.getToken(tokenData)}));
            // } else {
            //     res.end(resJson.returnError(500, '用户名或密码错误'));
            // }
        }).catch(e => {
            res.json({ err:e});
        })
    }
}

module.exports = user;