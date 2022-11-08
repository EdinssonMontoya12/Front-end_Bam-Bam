const express = require('express')
const dashboard = require('./dashboard')
const facturacion = require('./facturacion')
const inicio = require('./inicio')
const inventario = require('./inventario')
const reportes = require('./reportes')
const terceros = require('./terceros')

const router = express.Router();

router.use('', [
    dashboard,
    facturacion,
    inicio,
    inventario,
    reportes,
    terceros
])

module.exports = router