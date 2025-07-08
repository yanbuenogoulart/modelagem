const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Produtos = require('./Produtos');
const db = require('../db/conn');

Compras.belongsTo(Usuarios, {
    foreignKey: 'idUsuario',
    as: 'idUsuario'
})

Compras.hasMany(Produtos, {
    foreignKey: 'idCompras',
    as: 'produtos'
})

Usuarios.hasMany(Compras, {
    foreignKey: 'idCompras'
})

Produtos.belongsTo(Compras, {
    foreignKey: 'idCompras',
    as: 'idCompras'
})