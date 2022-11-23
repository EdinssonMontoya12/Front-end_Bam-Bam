const express = require('express');
const tercero = require('../controller/terceros/index');

const router = express.Router();

router.get('/insertar', tercero.insertar)
router.get('/actualizar', tercero.actualizar)
router.get('/', tercero.consultar)
router.get('/eliminar', tercero.eliminar)

module.exports = router;