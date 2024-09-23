const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const rotasProdutos = require('./Rotas/rotasProduts')
const rotasClientes = require('./Rotas/rotasClientes')
const rotasAutenticacao = require('./Rotas/rotasAutentic')

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotasProdutos)
app.use('/clientes', rotasClientes)
app.use('/auth', rotasAutenticacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(8000)

module.exports = app