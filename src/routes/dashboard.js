//Rutas de la zona de D A S H B O A R D

//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta del dashboard
router.get('/dashboard', (req,res) => {
    res.render('dashboard/dashboard.hbs');
    
});

module.exports= router;