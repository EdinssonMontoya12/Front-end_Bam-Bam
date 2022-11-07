//Rutas de la zona de inventario

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();


//Agregar un producto al inventario
router.get('/agregarproducto', (req,res) => {
    res.render('inventario/Agregarproducto.hbs', {style: '/css/style.css'});
   
});



//Visualiza el inventario
router.get('/tabla', (req,res) => {
  res.render('inventario/tabla.hbs');
  
});

//Subir el inventario
router.get('/subirinventario', (req,res) => {
    res.render('inventario/subirinventario.hbs');
    
});

module.exports= router;