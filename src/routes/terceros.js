//Rutas de la zona de REPORTES

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina de agregar cliente tercero
router.get('/agregarcliente', (req,res) => {
    res.render('terceros/agregarcliente');
});

//Ruta de la pagina de agregar proveedor tercero
router.get('/agregarprovedor', (req,res) => {
    res.render('terceros/agregarprovedor');
});

//Ruta de la pagina de agregar auxdeventa tercero
router.get('/agregarauxdeventas', (req,res) => {
    res.render('terceros/agregarauxdeventas');
});


router.get('/modificartercero', (req,res) => {
    res.render('terceros/modificartercero.hbs');
});

module.exports= router;