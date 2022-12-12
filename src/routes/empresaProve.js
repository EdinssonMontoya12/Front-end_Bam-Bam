const express = require('express');
const empresaProve = require('../controller/terceros/empresaProve')


const router = express.Router();

router.get('/insertar', empresaProve.insertar)
router.post('/', empresaProve.insertardao)
router.get('/actualizar/:id',empresaProve.actualizar)
router.post('/:id',empresaProve.actualizardao)
router.get('/', empresaProve.consultar)
router.get('/eliminar/:id', empresaProve.eliminar)

module.exports = router;   