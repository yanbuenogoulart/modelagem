const Compras = require('../model/Compras')

const cadastrarCompras = async (req , res)=> {
    const body = req.body
    try {
        const compraCriada = await Compras.create(body)
        res.status(200).json(compraCriada)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao cadastrar usuário'})
    }
}

const listarCompras = async(req , res)=> {
    try {
        const comprasAll = await Compras.findAll()
        res.status(200).json(comprasAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao listar usuários'}) 
    }
}

module.exports = {cadastrarCompras, listarCompras}