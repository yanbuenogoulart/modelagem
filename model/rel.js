const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Produtos = require('./Produtos');

Compras.belongsTo(Usuarios, {
    foreignKey: 'idUsuario',
    as: 'idUsuarios'
})

Compras.hasMany(Produtos, {
    foreignKey: 'idCompras',
    as: 'idProdutos'
})

Usuarios.hasMany(Compras, {
    foreignKey: 'idCompras',
    as: 'idCompras'
})

Produtos.belongsTo(Compras, {
    foreignKey: 'idCompras',
    as: 'idCompras'
})

module.exports = {Compras, Usuarios, Produtos}