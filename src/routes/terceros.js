//Rutas de la zona de REPORTES
const fetch = require('node-fetch');
//Llamando a Express JS


//Llamando al modulo de Routers de Express

const express = require('express');
const router= express.Router();

//Ruta de la pagina de agregar cliente tercero

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