const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('db_modelagem', 'root', 'senai', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(()=> {
    console.log('Conexão bem sucedida com db')
}).catch((err)=> {
    console.error('Não foi possível conectar', err)
})

module.exports = sequelize