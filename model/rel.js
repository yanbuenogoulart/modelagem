const Compras = require('./Compras');
const Usuarios = require('./Usuarios');
const Produtos = require('./produtos')

// 1. Compra pertence a um usuário
Compras.belongsTo(Usuarios, {
    foreignKey: 'idUsuario',
    as: 'usuario',
    onDelete: 'CASCADE'
})

// 2. Um usuário tem várias compras
Usuarios.hasMany(Compras, {
    foreignKey: 'idUsuario',
    as: 'compras',
    onDelete: 'CASCADE'
})

// 3. Compra pertence a um produto (um produto comprado)
Compras.belongsTo(Produtos, {
    foreignKey: 'idProduto',
    as: 'produto',
    onDelete: 'CASCADE'
})

// 4. Um produto tem várias compras (compras feitas desse produto)
Produtos.hasMany(Compras, {
    foreignKey: 'idProduto',
    as: 'compras',
    onDelete: 'CASCADE'
})


module.exports = {Compras, Usuarios, Produtos}