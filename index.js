const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotasProdutos = require('./Rotas/rotasProduts')
const rotasClientes = require('./Rotas/rotasClientes')
const rotasAutenticacao = require('./Rotas/rotasAutentic')

app.use(bodyParser.json())
app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)
app.use('/auth', rotasAutenticacao)

app.listen(6000)

module.exports = app