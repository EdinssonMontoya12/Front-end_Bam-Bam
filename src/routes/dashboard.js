//Rutas de la zona de D A S H B O A R D
const fetch = require('node-fetch');
//Llamando a Express JS
const express = require('express');

//Llamando al modulo de Routers de Express

const router= express.Router();

//Ruta del dashboard
router.get('/dashboard', async (req,res) => {

      var  resultado = await fetch('http://localhost:3000/articulo/1/**')
      var  resultado2 = await fetch('http://localhost:3000/tercero/1/**')
   resultado = await resultado.json();
   resultado2 = await resultado2.json();
    if(resultado.OSUCCESS==1){
        const datos = resultado
        const datos2 = resultado2
        console.log(datos)
        console.log(datos2)
        console.log(resultado.DATA.length)
    var cantproductos=0;
        for(let i=0; i < resultado.DATA.length ; i++ ){
            cantproductos = cantproductos + resultado.DATA[i].cantidad
    
}  
var canterceros=resultado.DATA.length;
console.log(canterceros)     
console.log(cantproductos)
        res.render('dashboard/dashboard', {datos,datos2,  cantproductos, canterceros} );
}  



   
    
});

module.exports= router;