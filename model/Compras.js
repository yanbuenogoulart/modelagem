const { DataTypes } = require('sequelize');
const db = require('../db/conn');

const Compras = db.define('compras', {
    idCompras: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descontoAplicado: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precoFinal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    formaPagamento: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    statusCompra: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {timestamps: false, tableName: 'compras'});

module.exports = Compras;