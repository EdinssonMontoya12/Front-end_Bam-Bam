//Rutas de la zona de REPORTES
const fetch = require('node-fetch');
//Llamando a Express JS


//Llamando al modulo de Routers de Express

const express = require('express');
const router = express.Router();

//Ruta de la pagina de agregar cliente tercero

//Ruta de la pagina de agregar proveedor tercero
router.get('/agregarprovedor', (req, res) => {
    res.render('terceros/agregarprovedor');
});

router.post('/formagregarcliente', async (req, res) => {
    console.log(req.body);
    let { identificacion, nombre, codigo, tipoter, sucid, codempresaprod } = req.body;

    const data = {
        identificacion: identificacion,
        nombre: nombre,
        codigo: codigo,
        codtipo: tipoter,
        sucid: req.session.sucid,
        codempresaprod: tipoter === 'CLI' ? null : codempresaprod
    }
    console.log(data)
    console.log(JSON.stringify(data))

    var result = await fetch('http://localhost:3000/tercero/', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)

    })

    res.redirect('/terceros')

});

router.get('/terceros', async (req, res) => {
    resultado = await fetch(`http://localhost:3000/tercero/${req.session.sucid}/**`)

    resultado = await resultado.json();

    if (resultado.OSUCCESS == 1) {
        const datos = resultado
        console.log(datos);
        res.render('terceros/usuario', { datos });
    }

    else {
        console.log("Fallo, algo fallo")
        res.render('terceros/usuario');
    }
});

router.post('/formeliminarcliente', async (req, res) => {
    console.log(req.body);
    let id = req.body.id;
    console.log(id);
    var result = await fetch('http://localhost:3000/tercero/' + id, {
        method: 'DELETE'
    })

    res.redirect('/terceros')
});

//Ruta de la pagina de agregar auxdeventa tercero
router.get('/agregarauxdeventas', (req, res) => {
    res.render('terceros/agregarauxdeventas');
});


router.get('/modificartercero', (req, res) => {
    res.render('terceros/modificartercero.hbs');
});

module.exports = router;