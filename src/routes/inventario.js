const express = require('express');
const inventario = require('../controller/inventario/index')

const router= express.Router();

router.get('/insertar', inventario.insertar)
router.get('/actualizar', inventario.actualizar)
router.get('/', inventario.consultar)
router.get('/eliminar', inventario.eliminar)



module.exports= router;