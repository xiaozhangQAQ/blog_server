// model/login.js
const db = require('../../../config/mysql.js');

module.exports = async (data) => {
    const { name, password } = data;
    const searchKey = 'username';
    const searchValue = name;
    const searchSQL = `SELECT * FROM user WHERE ${searchKey} = "${searchValue}" AND password = "${password}"`;
    return await db.query(searchSQL);
};