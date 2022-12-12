const express = require('express');
const facturacion = require('../controller/facturacion/facturaCompra')

const router = express.Router();

router.get('/insertar', facturacion.insertar)
router.get('/actualizar/:id', facturacion.actualizar)
router.get('/', facturacion.consultar)
router.get('/asentar/:id', facturacion.asentar)
//router.get('/reversar/:id', facturacion.reversar)

module.exports = router;   