const express = require('express');
const reporte = require('../controller/reporte/index')

const router= express.Router();

//Estar rutas las crea usted, esas dependen del tipo de reporte que vaya a generar

router.get('/', reporte.cargar)

module.exports= router;