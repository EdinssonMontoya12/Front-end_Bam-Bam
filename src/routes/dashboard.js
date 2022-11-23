//Rutas de la zona de D A S H B O A R D
const fetch = require('node-fetch');
//Llamando a Express JS
const express = require('express');
const { isLogged } = require('../controller/auth/auth.js')
//Llamando al modulo de Routers de Express

const router = express.Router();

//Ruta del dashboard
router.get('/dashboard', isLogged, async (req, res) => {

    var resultado = await fetch('`${process.env.HOST_BACKEND/articulo/1/**')
    var resultado2 = await fetch('`${process.env.HOST_BACKEND/tercero/1/**')
    resultado = await resultado.json();
    resultado2 = await resultado2.json();
    if (resultado.OSUCCESS == 1) {
        const datos = resultado
        const datos2 = resultado2
        var cantproductos = 0;
        for (let i = 0; i < resultado.DATA.length; i++) {
            cantproductos = cantproductos + resultado.DATA[i].cantidad

        }
        var canterceros = resultado.DATA.length;
        res.render('dashboard/dashboard', { datos, datos2, cantproductos, canterceros });
    }
});

module.exports = router;