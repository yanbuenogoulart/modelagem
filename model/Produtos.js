const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Produtos = db.define('produtos', {
    idProd: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    desconto: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {tableName: 'produtos', timestamps: false});

module.exports = Produtos;