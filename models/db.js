const Sequelize = require('sequelize')

//conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'Paulo0108*', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}