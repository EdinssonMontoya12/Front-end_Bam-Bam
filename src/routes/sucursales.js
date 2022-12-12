const express = require('express');
const sucursales = require('../controller/sucursales/index')

const router= express.Router();

router.get('/consultar', sucursales.consultar)
router.get('/insertar', sucursales.insertar)
router.post('/', sucursales.insertardao)

module.exports= router;