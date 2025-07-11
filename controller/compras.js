const Compras = require('../model/Compras')

const cadastrarCompras = async (req, res) => {
    const body = req.body
    try { 
        const compraCriada = await Compras.create(body)
        res.status(200).json(compraCriada)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao cadastrar compra' })
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
        if (compra) {
            await compra.update(body)
            res.status(200).json({ message: 'Compra atualizada com sucesso' })
        } else {
            res.status(404).json({ message: 'Compra não encontrada' })
        }
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

module.exports = { cadastrarCompras, listarCompras, listarCompraPorId, atualizarCompra, apagarCompra }
