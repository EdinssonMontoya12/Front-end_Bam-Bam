const express = require('express');
const inventario = require('../controller/inventario/index')

const router= express.Router();

router.get('/insertar', inventario.insertar)
router.get('/actualizar', inventario.actualizar)
router.get('/', inventario.consultar)
router.get('/eliminar', inventario.eliminar)

router.get('/verlote', inventario.verlote)
router.get('/creargruppro', inventario.creargruppro)
router.get('/vergruppro', inventario.vergruppro)
router.get('/crearlote', inventario.crearlote)


module.exports= router;