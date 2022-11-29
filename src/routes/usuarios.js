const express = require('express');
const usuario = require('../controller/usuarios/index')

const router = express.Router();

router.get('/insertar', usuario.insertar)
router.get('/actualizar', usuario.actualizar)
router.get('/', usuario.consultar)
router.get('/eliminar/:id', usuario.eliminar)

module.exports = router;