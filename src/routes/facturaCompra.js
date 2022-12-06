const express = require('express');
const facturacion = require('../controller/facturacion/facturaCompra')

const router = express.Router();

router.get('/insertar', facturacion.insertar)
//router.get('/insertarventadao/:factura', facturacion.insertarventaDao)
//router.get('/actualizar', facturacion.actualizar)
router.get('/', facturacion.consultar)
//router.get('/eliminar', facturacion.eliminar)
router.get('/asentar/:id', facturacion.asentar)

module.exports = router;   