const {Sequelize, Op} = require('sequelize')


const {article} = require('./demo.js')

const item = async ctx => {
    console.log(ctx)
    // const where = {
    //   id: ctx.query.id
    // }
    // const data = await Article.findOne({where})
    // data.tag = data.tag.split(',')
    // data.category = data.category.split(',')
    // ctx.body = {
    //   code: 1000,
    //   data
    // }
  }

module.exports = {
    item
}