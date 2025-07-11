const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Usuarios = db.define('usuarios', {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    primeiroNome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    sobreNome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {timestamps: false, tableName: 'usuarios'})

module.exports = Usuarios