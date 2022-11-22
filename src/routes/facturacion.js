//Rutas de la zona de F A C T U R A C I O N
const fetch = require('node-fetch');
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
    /** var  resultado = await fetch('http://localhost:3000/articulo/1/**')

   resultado = await resultado.json();

    if(resultado.OSUCCESS==1){
        const datos = resultado
        console.log(datos );
        res.render('facturacion/agregarprodfacturafc', {datos});
        //for(let i=0; i < resultado.DATA.length ; i++ ){
    //console.log(resultado.DATA[i]);
}

else{
    console.log("Fallo, algo fallo")*/
    res.render('facturacion/agregarprodfacturafc');
    //}

    // Exito
    // .then(response => response.json())  // convertir a json
    //  .then(json => console.log(json))    //imprimir los datos en la consola
    //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores






});

router.post('/formagregarprodfacturafc', (req, res) => {

    console.log(req.body);
   
    if (activo == undefined) {
        activo = 0
    } else {
        activo = 1
    }

    if (comprapack == undefined) {
        comprapack = 0
    } else {
        comprapack = 1
    }



    let producto = [
        articuloid,
        preciov,
        precioc,
        comprapack,
        cantpack,
        sucid,
        nombrep,
        activo,
        cantmax,
        cantmin

    ];
    console.log(JSON.stringify(producto));





});


//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfacturadevfv', (req,res) => {
    res.render('facturacion/agregarprodfacturadevfv');
   
});




// Ola mi pc no permite mas de 3 ficheros con rutas me toco poner rutas aca
router.get('/tercero', async(req, res) => {
    resultado = await fetch('http://tiendasbambam.com:3000/tercero/1/**')
  resultado = await resultado.json();
   if(resultado.OSUCCESS==1){
       const datos = resultado
       res.render('terceros/tercerolist', {datos});
}

else{
   console.error("Fallo, algo fallo");
   res.render('terceros/usuario');
   }

   // Exito
   // .then(response => response.json())  // convertir a json
   //  .then(json => console.log(json))    //imprimir los datos en la consola
   //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores






});


router.get('/agregarcliente', (req,res) => {
    res.render('terceros/aggCliente');
});




router.post('/formagregarcliente', async (req,res) => {
    console.log(req.body);
    let { identificacion, nombre , codigo ,  codtipo , sucid, codempresaprod} = req.body;

    const data = {
        identificacion: identificacion,
        nombre: nombre,
        codigo: codigo,
        codtipo: codtipo, 
        sucid: sucid,
        codempresaprod : codempresaprod
    }
    console.log(data) 
    console.log(JSON.stringify(data))

    var result = await fetch('http://localhost:3000/tercero/', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)

    }) 

    result = await result.json();
    console.log(result)


});
 
router.get('/agregarproveedor', (req,res) => {
    res.render('terceros/aggProveedor');
});
router.get('/agregargerente', (req,res) => {
    res.render('terceros/aggGerente');
});



router.post('/formeliminarcliente', async (req,res) => {
    console.log(req.body);
    let id = req.body.id;
    
  
    
    console.log(id);
    var result = await fetch('http://localhost:3000/tercero/' + id, {
        
        method: 'DELETE'

    }) 

    result = await result.json();
    console.log(result)


});
//http://tiendasbambam.com:3000/tercero/1/**

router.get('/dashboard2', async (req,res) => {
    
    resultado = await fetch('http://tiendasbambam.com:3000/tercero/1/**')
  resultado = await resultado.json();
   
       const datos = resultado
       res.render('terceros/tercerolist', {datos});




   // Exito
   // .then(response => response.json())  // convertir a json
   //  .then(json => console.log(json))    //imprimir los datos en la consola
   //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores






});


module.exports= router;   