const express = require('express');
const facturacion = require('../controller/facturacion/index')

const router = express.Router();

router.get('/insertar', facturacion.insertar)
router.get('/insertarCompra', facturacion.insertarCompra)
//router.get('/actualizar', facturacion.actualizar)
router.get('/consultar', facturacion.consultar)
router.get('/consultarCompra', facturacion.consultar)
//router.get('/eliminar', facturacion.eliminar)

module.exports = router;   