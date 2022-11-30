const express = require('express');
const reportes = require('../controller/reportes/index')


const router= express.Router();

//Estar rutas las crea usted, esas dependen del tipo de reporte que vaya a generar

router.get('/', reportes.cargar)
router.get('/facturas', reportes.facturas)
router.get('/tercero', reportes.tercero)
router.get('/producto', reportes.producto)


module.exports= router;