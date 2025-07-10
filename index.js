const cors = require('cors')
const express = require('express')
const app = express()
const env = require('dotenv').config()

const port = env.parsed.PORT || 3000
const hostname = env.parsed.HOSTNAME || 'localhost'
const conn = require('./db/conn')

const usuariosController = require('./controller/usuarios')
const comprasController = require('./controller/compras')
const produtosController = require('./controller/produtos')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/usuarios', usuariosController.cadastrarUser)
app.get('/usuarios', usuariosController.listarUser)

app.post('/compras', comprasController.cadastrarCompras)
app.get('/compras', comprasController.listarCompras)

app.post('/produtos', produtosController.cadastrarProd)
app.get('/produtos', produtosController.listarProd)
app.get('/', (req, res)=> {
    res.send('Conectado ao servidor')
})

conn.sync().then(()=> {
    app.listen(port, hostname, ()=> {
        console.log(`rodando o servidor em http://${hostname}:${port}`)
    })
})