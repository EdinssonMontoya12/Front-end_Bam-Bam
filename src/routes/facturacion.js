const express = require('express');
const facturacion = require('../controller/facturacion/facturaventa')

const router = express.Router();

router.get('/insertar', facturacion.insertar)
router.get('/insertarventadao/:factura', facturacion.insertarventaDao)
router.get('/actualizar/:id', facturacion.actualizar)
router.get('/', facturacion.consultar)
router.get('/eliminar/:id', facturacion.eliminar)
router.get('/asentar/:id', facturacion.asentar)
router.get('/reversar/:id', facturacion.reversar)
router.get('/ver/:id/:tipo', facturacion.verFacturaId)

module.exports = router;   