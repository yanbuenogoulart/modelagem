const Compras = require('../model/Compras')
const Produtos = require('../model/produtos')

const tirarEstoque = async (produtoId, quantidade) => {
    const produto = await Produtos.findByPk(produtoId)
    if (!produto) {
        throw new Error('Produto não encontrado')
    }

    if (produto.estoque < quantidade) {
        throw new Error('Estoque insuficiente')
    }

    produto.estoque -= quantidade
    await produto.save()
    return produto
}

const adicionarEstoque = async (produtoId, quantidade) => {
    const produto = await Produtos.findByPk(produtoId)
    if (!produto) {
        throw new Error('Produto não encontrado')
    }
    produto.estoque += quantidade
    await produto.save()
    return produto
}

const cadastrarCompras = async (req, res) => {
    const body = req.body
    try {
        const compraCriada = await Compras.create(body)
        await tirarEstoque(body.idProduto, body.quantidade)

        return res.status(201).json(compraCriada)
    } catch (error) {
        console.error(error.message)
        return res.status(400).json({ message: error.message })
    }
}

const listarCompras = async (req, res) => {
    try {
        const comprasAll = await Compras.findAll()
        res.status(200).json(comprasAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao listar compras' }) 
    }
}

const listarCompraPorId = async (req, res) => {
    try {
        const { id } = req.params
        const compra = await Compras.findByPk(id)

        if (compra) {
            res.status(200).json(compra)
        } else {
            res.status(404).json({ message: 'Compra não encontrada' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao buscar compra por ID' })
    }
}

const atualizarCompra = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        const compra = await Compras.findByPk(id)
        if (!compra) {
            return res.status(404).json({ message: 'Compra não encontrada' })
        }

        if (body.quantidade && body.quantidade !== compra.quantidade) {
            const diferenca = body.quantidade - compra.quantidade

            if (diferenca > 0) {
                await tirarEstoque(compra.idProduto, diferenca)
            } else {
                await adicionarEstoque(compra.idProduto, Math.abs(diferenca))
            }
        }

        await compra.update(body)
        res.status(200).json({ message: 'Compra atualizada com sucesso' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao atualizar compra' })
    }
}

const apagarCompra = async (req, res) => {
    try {
        const { id } = req.params
        const compra = await Compras.findByPk(id)

        if (compra) {
            await adicionarEstoque(compra.idProduto, compra.quantidade)
            await compra.destroy()
            res.status(200).json({ message: 'Compra apagada com sucesso' })
        } else {
            res.status(404).json({ message: 'Compra não encontrada' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao apagar compra' })
    }
}

module.exports = { cadastrarCompras, listarCompras, listarCompraPorId, atualizarCompra, apagarCompra, tirarEstoque }
