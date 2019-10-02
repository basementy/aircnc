const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-sysdr.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// GET, POST, PUT, DELETE
// req.query = Acessar query params (filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação e edição)

app.use(express.json())
app.use(routes)

app.listen(3333)