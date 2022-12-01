const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const tercero = {}

tercero.consultar = async (req, res) => {
    var tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${res.locals.user.sucid}/**`)
    
    tercero = await tercero.json()
    console.log(tercero)
    
    res.render('tercero/verTerceros', helpers.getDataUsuario(res.locals.user, tercero.DATA))

    
}

tercero.insertar = async (req, res) => {

    const forma = document.getElementById('form')
    const data = {
        codigo: forma.codigo,
        identificacion: forma.cedula,
        codRol: forma.rol,
        nombre: forma.nombre,
        apellido: forma.apellido,
        correo: forma.email,
        telefono: forma.telefono,
        empresaproid: forma.empresa,
    }

    var tercero = fetch(`${process.env.HOST_BACKEND}/tercero/${res.locals.user.sucid}`)
    res.render('tercero/insertarTercero', helpers.getDataUsuario(res.locals.user))
}

tercero.actualizar = (req, res) => {
    res.render('tercero/actualizarTercero', helpers.getDataUsuario(res.locals.user))
    
}

tercero.eliminar = async (req, res) => {

    console.log(`se elimino el usuario: ${req.params.id}`)

    res.redirect('/tercero')
}

module.exports = tercero
