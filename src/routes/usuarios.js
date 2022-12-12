const express = require('express');
const usuario = require('../controller/usuarios/index')

const router = express.Router();

router.get('/insertar', usuario.insertar)
router.post('/insertardao', usuario.insertardao)
router.get('/actualizar/:id', usuario.actualizar)
router.post('/actualizardao/:id', usuario.actualizardao)
router.get('/', usuario.consultar)
router.get('/desactivar/:id', usuario.eliminar)

module.exports = router;