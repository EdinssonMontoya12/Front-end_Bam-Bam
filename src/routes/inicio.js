//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta de la pagina inicial(Login del usuario)
router.get('/', (req,res) => {
    res.render('auth/login')
   
});

module.exports= router;