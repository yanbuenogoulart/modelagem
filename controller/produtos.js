const Produtos = require('../model/Produtos')

const cadastrarProd = async (req , res)=> {
    const body = req.body
    try {
        const produtoCriado = await Produtos.create(body)
        res.status(200).json(produtoCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao cadastrar usuário'})
    }
}

const listarProd = async(req , res)=> {
    try {
        const produtoAll = await Produtos.findAll()
        res.status(200).json(produtoAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao listar usuários'}) 
    }
}

module.exports = {cadastrarProd, listarProd}