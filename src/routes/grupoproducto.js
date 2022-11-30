const express = require('express');
const grupoproducto = require('../controller/inventario/grupoproducto')

const router= express.Router();

//Estar rutas las crea usted
router.get('/insertargruppro', grupoproducto.insertargruppro)
router.get('/vergruppro', grupoproducto.vergruppro)

module.exports= router;