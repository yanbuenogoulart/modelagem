const Usuarios = require('../model/Usuarios')

const cadastrarUser = async (req , res)=> {
    const body = req.body
    try {
        const usuarioCriado = await Usuarios.create(body)
        res.status(200).json(usuarioCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao cadastrar usuário'})
    }
}

const listarUser = async(req , res)=> {
    try {
        const usuariosAll = await Usuarios.findAll()
        res.status(200).json(usuariosAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Erro ao listar usuários'}) 
    }
}

module.exports = {cadastrarUser, listarUser}