const cors = require('cors')
const express = require('express')
const app = express()
const env = require('dotenv').config()

const routes = require('./routes')

const port = env.parsed.PORT || 3000
const hostname = env.parsed.HOSTNAME || 'localhost'
const conn = require('./db/conn')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res)=> {
    res.send('Conectado ao servidor')
})

conn.sync().then(()=> {
    app.listen(port, hostname, ()=> {
        console.log(`rodando o servidor em http://${hostname}:${port}`)
    })
})