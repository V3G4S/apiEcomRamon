const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotasProduts')


app.use(bodyParser.json())

app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)

app.listen(8000)