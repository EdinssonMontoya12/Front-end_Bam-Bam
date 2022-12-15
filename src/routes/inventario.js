const express = require('express');
const inventario = require('../controller/inventario/index')

const router= express.Router();

router.get('/', inventario.consultar)
router.get('/insertar', inventario.insertar)
router.post('/insertardao', inventario.insertardao)
router.get('/actualizar/:id', inventario.actualizar)
router.post('/:id', inventario.actualizardao)
router.get('/activar/:id', inventario.activar)
router.get('/eliminar/:id', inventario.eliminar)
router.get('/cargarinfo', inventario.cargarinfo)


module.exports= router;