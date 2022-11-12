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
router.get('/tabla',async  (req,res) => {
  var  resultado = await fetch('http://localhost:3000/articulo/1/**')

  resultado = await resultado.json();

   if(resultado.OSUCCESS==1){
       const datos = resultado
       console.log(datos );
       res.render('inventario/tabla', {datos});
       //for(let i=0; i < resultado.DATA.length ; i++ ){
   //console.log(resultado.DATA[i]);
}

else{
   console.log("Fallo, algo fallo")
   res.render('inventario/tabla');
}

   // Exito
   // .then(response => response.json())  // convertir a json
  //  .then(json => console.log(json))    //imprimir los datos en la consola
 //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

   
   


  
}); 

//Subir el inventario
router.get('/subirinventario', (req,res) => {
    res.render('inventario/subirinventario.hbs');
    
});

module.exports= router;