const express = require('express');
const lote = require('../controller/inventario/lote')

const router= express.Router();

//Estar rutas las crea usted

router.get('/', lote.consultar)
router.get('/insertar', lote.insertar)
router.post('/', lote.insertardao)

module.exports= router;