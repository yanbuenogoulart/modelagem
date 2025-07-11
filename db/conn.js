const {Sequelize} = require('sequelize')
const dotenv = require('dotenv').config()
const sequelize = new Sequelize('db_modelagem', dotenv.parsed.DB_USER, dotenv.parsed.DB_PASS, {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(()=> {
    console.log('Conexão bem sucedida com db')
}).catch((err)=> {
    console.error('Não foi possível conectar', err)
})

module.exports = sequelize