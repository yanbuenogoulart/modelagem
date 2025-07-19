const usuariosController = require('./controller/usuarios')
const comprasController = require('./controller/compras')
const produtosController = require('./controller/produtos')
const {Router} = require('express')
const routes = Router()

routes.post('/usuarios', usuariosController.cadastrarUser)
routes.get('/usuarios', usuariosController.listarUser)
routes.get('/usuarios/id/:id', usuariosController.listarUserPorId)
routes.get('/usuarios/nome/:nome', usuariosController.listarUserPorNome )
routes.delete('/usuarios/:id', usuariosController.apagarUser)
routes.put('/usuarios/:id', usuariosController.atualizarUser)

routes.post('/compras', comprasController.cadastrarCompras)
routes.get('/compras', comprasController.listarCompras)
routes.get('/compras/id/:id', comprasController.listarCompraPorId)
routes.put('/compras/:id', comprasController.atualizarCompra)
routes.delete('/compras/:id', comprasController.apagarCompra)

routes.post('/produtos', produtosController.cadastrarProd)
routes.get('/produtos', produtosController.listarProd)
routes.get('/produtos/id/:id', produtosController.listarProdPorId)
routes.get('/produtos/nome/:nome', produtosController.listarProdPorNome )
routes.delete('/produtos/:id', produtosController.apagarProd)
routes.put('/produtos/:id', produtosController.atualizarProd)

module.exports = routes