const mysql = require('mysql');
const db = require('./db');
const co = require('co-mysql');

const pool = mysql.createPool({
    host: db.host,
    user: db.user,
    password: db.password,
    port: db.port,
    database: db.dbname
});


module.exports = co(pool);
// const Sequelize = require('sequelize')

// const {
//     dbName,
//     host,
//     port,
//     user,
//     password
// } = require('./db.js')

// const sequelize = new Sequelize(dbName, user, password, {
//     dialect: 'mysql',
//     host,
//     port,
//     logging: true,
//     timezone: '+08:00',
//     define: {
//         // create_time && update_time
//         timestamps: true,
//         // delete_time
//         paranoid: true,
//         createdAt: 'created_at',
//         updatedAt: 'updated_at',
//         deletedAt: 'deleted_at',
//         // 把驼峰命名转换为下划线
//         underscored: true,
//         scopes: {
//             bh: {
//                 attributes: {
//                     exclude: ['password', 'updated_at', 'deleted_at', 'created_at']
//                 }
//             },
//             iv: {
//                 attributes: {
//                     exclude: ['content', 'password', 'updated_at', 'deleted_at']
//                 }
//             }
//         }
//     }
// })

// sequelize
// .authenticate()
// .then(() => {
// console.log('MYSQL 连接成功......');
// })
// .catch(err => {
// console.error('链接失败:', err);
// });

// // 创建模型
// sequelize.sync()

// module.exports = {
//     sequelize
// }
