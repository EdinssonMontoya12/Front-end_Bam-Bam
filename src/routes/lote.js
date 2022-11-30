const express = require('express');
const lote = require('../controller/inventario/lote')

const router= express.Router();

//Estar rutas las crea usted

router.get('/verlote', lote.verlote)
router.get('/insertarlote', lote.insertarlote)

module.exports= router;