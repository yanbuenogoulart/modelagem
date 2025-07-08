const cors = require('cors')
const express = require('express')
const app = express()
const env = require('dotenv').config()

const port = env.parsed.PORT || 3000
const hostname = env.parsed.HOSTNAME || 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('Conectado ao servidor')
})

