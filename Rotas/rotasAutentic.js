const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorAutentic')

router.post('/login', controlador.login)

module.exports = router