const Produtos = require('../model/Produtos')
const sequelize = require('sequelize')
const { Op } = require('sequelize')

const cadastrarProd = async (req, res) => {
    const body = req.body
    try {
        const produtoCriado = await Produtos.create(body)
        res.status(200).json(produtoCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao cadastrar produto' })
    }
}

const listarProd = async (req, res) => {
    try {
        const produtoAll = await Produtos.findAll()
        res.status(200).json(produtoAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao listar produtos' }) 
    }
}

const listarProdPorId = async (req, res) => {
    try {
        const { id } = req.params
        const produtoAlvo = await Produtos.findByPk(id)
        if (produtoAlvo) {
            res.status(200).json(produtoAlvo)
        } else {
            res.status(404).json({ message: 'Produto não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao buscar produto por ID' })
    }
}

const listarProdPorNome = async (req, res) => {
    try {
        let { nome } = req.params
        nome = nome.toLowerCase()

        const produtosAlvos = await Produtos.findAll({
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('titulo')),
                {
                    [Op.like]: `%${nome}%`
                }
            )
        })

        if (produtosAlvos.length > 0) {
            res.status(200).json(produtosAlvos)
        } else {
            res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao buscar produto por nome' })
    }
}

const atualizarProd = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const produtoAlvo = await Produtos.findByPk(id)
        if (produtoAlvo) {
            await produtoAlvo.update(body)
            res.status(200).json({ message: 'Produto atualizado com sucesso' })
        } else {
            res.status(404).json({ message: 'Produto não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao atualizar produto' })
    }
}

const apagarProd = async (req, res) => {
    try {
        const { id } = req.params
        const produtoAlvo = await Produtos.findByPk(id)
        if (produtoAlvo) {
            await produtoAlvo.destroy()
            res.status(200).json({ message: 'Produto apagado com sucesso' })
        } else {
            res.status(404).json({ message: 'Produto não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao apagar produto' })
    }
}

module.exports = {cadastrarProd, listarProd, listarProdPorId, listarProdPorNome, atualizarProd, apagarProd}