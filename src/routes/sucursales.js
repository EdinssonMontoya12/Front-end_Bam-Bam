const express = require('express');
const sucursales = require('../controller/sucursales/index')

const router= express.Router();

router.get('/insertarSucursales', sucursales.insertar)
router.get('/consultarSucursales', sucursales.consultar)



module.exports= router;