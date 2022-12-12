const express = require('express');
const grupoproducto = require('../controller/inventario/grupoproducto')

const router= express.Router();

router.get('/', grupoproducto.consultar)
router.get('/insertar', grupoproducto.insertar)
router.post('/', grupoproducto.insertardao)
router.get('/eliminar/:id', grupoproducto.eliminar)
router.get('/actualizar/:id', grupoproducto.actualizar)
router.post('/:id', grupoproducto.actualizardao)

module.exports= router;