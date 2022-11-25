const express = require('express');
const empresaProve = require('../controller/terceros/empresaProve')


const router = express.Router();

router.get('/insertar', empresaProve.insertar)
router.get('/actualizar',empresaProve.actualizar)
router.get('/', empresaProve.consultar)
router.get('/eliminar/:id', empresaProve.eliminar)

module.exports = router;   