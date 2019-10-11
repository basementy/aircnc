const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('YOUR DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// GET, POST, PUT, DELETE
// req.query = Acessar query params (filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação e edição)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(8080)
