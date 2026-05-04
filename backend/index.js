// -> npm install (no terminal)
// já instala todas bibliotecas existentes por conta do .json

const express = require ('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const usuarioController = require('./db/veiculo.controller.js')

const hostname = 'localhost'
const PORT = 3000
// ---------------- Middleware -----------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ------------------- Rotas -------------------

app.post('/veiculo', usuarioController.cadastrar)
app.get('/veiculos', usuarioController.listar)

app.get('/', (req, res)=>{
    res.status(200).json({message: "Aplicação rodando!"})
})

// ------------------- Server -------------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao conectar com o banco de dados!', err)
})