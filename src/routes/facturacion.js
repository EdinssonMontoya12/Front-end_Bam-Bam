//Rutas de la zona de F A C T U R A C I O N

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina vista de facturas en general
router.get('/factura', (req,res) => {
    res.send('bienvenido a zona de facturacion');
    
});

//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfacturafc', (req,res) => {
    res.render('facturacion/agregarprodfacturafc');
   
}); 

//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfacturadevfv', (req,res) => {
    res.render('facturacion/agregarprodfacturadevfv');
   
});

//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfacturafv', (req,res) => {
    res.render('facturacion/agregarprodfacturafv');
   
});


module.exports= router;