const Usuarios = require('../model/Usuarios')
const sequelize = require('sequelize')

const cadastrarUser = async (req, res) => {
    const body = req.body
    try {
        const usuarioCriado = await Usuarios.create(body)
        res.status(200).json(usuarioCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao cadastrar usuário' })
    }
}

const listarUserPorId = async (req, res)=> {
    try {
        const {id} = req.params
        const usuarioAlvo = await Usuarios.findByPk(id)
        if (usuarioAlvo) {
            res.status(200).json(usuarioAlvo)
        }else {
            res.status(404).json({ message: 'Usuário não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao listar usuário' })
    }
}

const listarUserPorNome = async (req, res) => {
    try {
        let { nome } = req.params
        nome = nome.toLowerCase()

        const usuariosAlvos = await Usuarios.findAll({
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('primeiroNome')),
                {
                    [sequelize.Op.like]: `%${nome}%`
                }
            )
        })

        if (usuariosAlvos.length > 0) {
            res.status(200).json(usuariosAlvos)
        } else {
            res.status(404).json({ message: 'Nenhum usuário encontrado com esse nome' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao listar usuário' })
    }
}


const listarUser = async (req, res) => {
    try {
        const usuariosAll = await Usuarios.findAll()
        res.status(200).json(usuariosAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao listar usuários' })
    }
}

const apagarUser = async (req, res) => {
    try {
        const { id } = req.params
        const usuarioAlvo = await Usuarios.findByPk(id)
        console.log(id)
        if (usuarioAlvo) {
            await usuarioAlvo.destroy()
            res.status(200).json({ message: 'Usuário apagado com sucesso' })
        } else {
            res.status(404).json({ message: 'Usuário não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao apagar usuário' })
    }
}

const atualizarUser = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const usuarioAlvo = await Usuarios.findByPk(id)
        if (usuarioAlvo) {
            await usuarioAlvo.update(body)
            res.status(200).json({ message: 'Usuario atualizado com sucesso' })
        } else {
            res.status(404).json({ message: 'Usuário não foi encontrado' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Erro ao atualizar usuário' })
    }
}

module.exports = { cadastrarUser, listarUser, apagarUser, atualizarUser, listarUserPorId, listarUserPorNome }