const express = require('express')
const dashboard = require('./dashboard')
const facturacion = require('./facturacion')
const inicio = require('./inicio')
const inventario = require('./inventario')
const reportes = require('./reportes')
const terceros = require('./terceros')

const log = require('../controller/auth/auth.js')

const router = express.Router();

router.use('', [
    dashboard,
    facturacion,
    inventario,
    reportes,
    terceros
])

router.use('', [
    inicio])

module.exports = router