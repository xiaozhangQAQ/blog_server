const list = require('../../model/w/article/index');
const md5 = require("md5");

// 新增list模拟数据
// for(var i=0;i<100;i++){
//  let userid =  Math.floor(3*Math.random()) ;
//  let ids = [0,1,2].sort(() => Math.random() - 0.5).slice(0,2);
//   let sql = "INSERT INTO `myblog`.`blog_article_tag` (`article_id` ,`tag_id`)VALUES ('"+i+"', '"+ids.join(',')+"');"
//     db.query(sql);
// }



const user = {
    list: async (req, res) =>{
        const {page, pageSize} = req.body;
        console.log(req.body);
        await list.A_listquery({name, password: password}).then(reponse => {
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