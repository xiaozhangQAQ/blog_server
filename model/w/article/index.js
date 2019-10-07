// model/login.js
const db = require('../../../config/mysql.js');
let { exec, sql, transaction } = require('mysqls')

/**
 * 获取文章列表
 */
const A_listquery = async (data) => {
    const { page, pageSize } = data;
    let list = {};

    const searchSQL = `SELECT g.article_id AS article_id, g.title, GROUP_CONCAT( c.name ) AS tag_name, GROUP_CONCAT( c.id ) AS tag_id
    FROM blog_article g
    JOIN blog_article_tag a ON g.article_id = a.article_id
    JOIN blog_tag c ON FIND_IN_SET( c.tag_id, a.tag_id )
    WHERE g.status = 0
    GROUP BY g.article_id
    LIMIT ${page} , ${pageSize}`;
    
    const countSql = `SELECT count(*) as counts
    FROM blog_article g
    WHERE g.status = 0`;
    let count = await db.query(countSql);
    
    

    // console.log(await db.query(searchSQL))
    // console.log(await db.query(`select found_rows();`))

    // `SELECT *
    // FROM blog_article g
    // JOIN blog_article_tag a ON g.article_id = a.article_id
    // JOIN blog_tag c ON c.id = "qwe" and FIND_IN_SET( c.tag_id, a.tag_id );`

    // let searchSQL = sql
    // .count()
    // .table('blog_article')
    // .field('user_id')
    // .where('article.id != ', '-1')
    // .where({status:0})
    // .select();
    return await db.query(searchSQL);
};


const getcategory = async (data) => {
    const { page, pageSize } = data;
    const searchKey = 'username';
    const searchValue = name;
    const searchSQL = `SELECT * FROM user WHERE ${searchKey} = "${searchValue}" AND password = "${password}"`;
    return await db.query(searchSQL);
};

module.exports = {
    A_listquery
}