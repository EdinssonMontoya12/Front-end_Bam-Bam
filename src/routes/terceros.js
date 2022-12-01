const express = require('express');
const tercero = require('../controller/terceros/index');
const helperTercero = require('../controller/terceros/helpers.tercero')

const router = express.Router();

router.get('/insertar', tercero.insertar)
router.get('/actualizar/:id', tercero.actualizar)
router.get('/', tercero.consultar)
router.get('/eliminar/:id', tercero.eliminar)
router.post('/insertardao/', tercero.insertarDao)

module.exports = router;