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
    let { codigof, idc, cc, nombrev, lote, descp, fasentado, nombrep, articuloid, precioc, preciov, comprapack, cantpack, sucid, cantmin, cantmax, activo, activo2 } = req.body;

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

//Ruta de Agregar productos a una factura especifica
router.get('/agregarprodfacturafv', (req,res) => {
    res.render('facturacion/agregarprodfacturafv');
   
});


// Ola mi pc no permite mas de 3 ficheros con rutas me toco poner rutas aca
router.get('/usuario', async(req, res) => {
    resultado = await fetch('http://localhost:3000/tercero/1/**')

  resultado = await resultado.json();

   if(resultado.OSUCCESS==1){
       const datos = resultado
       console.log(datos );
       res.render('terceros/usuario', {datos});
       //for(let i=0; i < resultado.DATA.length ; i++ ){
   //console.log(resultado.DATA[i]);
}

else{
   console.log("Fallo, algo fallo")
   res.render('terceros/usuario');
   }

   // Exito
   // .then(response => response.json())  // convertir a json
   //  .then(json => console.log(json))    //imprimir los datos en la consola
   //   .catch(err => console.log('Solicitud fallida', err)); // Capturar errores






});


module.exports= router;