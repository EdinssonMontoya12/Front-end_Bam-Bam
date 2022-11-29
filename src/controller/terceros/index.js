const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const tercero = {}

tercero.consultar = async (req, res) => {
    var tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${res.locals.user.sucid}/**`)
    
    tercero = await tercero.json()
    
    res.render('tercero/verTerceros', helpers.getDataUsuario(res.locals.user, tercero.DATA))
}

tercero.insertar = (req, res) => {
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
