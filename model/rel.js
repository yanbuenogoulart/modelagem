const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Produtos = require('./Produtos');


// compras pertence a usuarios
Compras.belongsTo(Usuarios, {
    foreignKey: 'idUsuario',
    as: 'idUsuarios'
})

// compras podem ter varios produtos
Compras.hasMany(Produtos, {
    foreignKey: 'idCompras',
    as: 'idProdutos'
})


// usuarios podem ter varias compras
Usuarios.hasMany(Compras, {
    foreignKey: 'idCompras',
    as: 'idCompras'
})

// produtos pertencem a compras
Produtos.belongsTo(Compras, {
    foreignKey: 'idCompras',
    as: 'idCompras'
})

module.exports = {Compras, Usuarios, Produtos}