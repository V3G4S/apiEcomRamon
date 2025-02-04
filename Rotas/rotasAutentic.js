const express = require('express')
const router = express.Router()
const controlador = require('../Controladores/controladorAutentic')

router.post('/login', controlador.login)
router.post('/logout', controlador.logout)

module.exports = router