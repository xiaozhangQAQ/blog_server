// model/login.js
const db = require('../../config/mysql.js');

//搜索用户
const sel_user = async (data) => {
    const { username } = data;
    const searchSQL = `SELECT * FROM blog_user WHERE username = "${username}"`;
    return await db.query(searchSQL);
};

//更新用户token
const up_user = async (data) => {
    const { token_val,user_id } = data;
    const login_time = (new Date()).getTime();
//     log_user` SET `access_token` = '113456',
// `status` = b '0',
// `last_login_time` = '2147456' WHERE `blog_user`.`user_id` = 'aac13ba0-e104-11e9-8591-1d284fa154e5';
    const searchSQL = `UPDATE blog_user SET access_token = "${token_val}",last_login_time = "${login_time}" WHERE blog_user.user_id = "${user_id}"`;
    return await db.query(searchSQL);
};

//获取用户信息
const get_user_info = async (data) => {
    const { user_id } = data;

    const searchSQL = `SELECT user_id,roles,introduction,avatar,username as name FROM blog_user WHERE user_id = "${user_id}"`;
    return await db.query(searchSQL);
};

//添加用户
const add_user = async (data) => {
    const { id, username, newpassword, status } = data;
    const creat_time = (new Date()).getTime();
    const searchSQL = `INSERT INTO blog_user (user_id,username,password,create_time,status) VALUES ("${id}","${username}","${newpassword}","${creat_time}",${status})`;
    // INSERT INTO `myblog`.`blog_user` (
    //     `user_id` ,
    //     `username` ,
    //     `password` ,
    //     `access_token` ,
    //     `create_time` ,
    //     `status` ,
    //     `last_login_time`
    //     )
    //     VALUES (
    //     '1', 'admin', '123456', NULL , '1555245011', b '0', NULL
    //     );
    return await db.query(searchSQL);
};

module.exports = {
    sel_user,
    add_user,
    up_user,
    get_user_info
}