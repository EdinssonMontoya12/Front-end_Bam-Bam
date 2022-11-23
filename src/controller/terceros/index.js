const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const tercero = {}

tercero.consultar = (req, res) => {
    res.render('tercero/verTerceros', helpers.getDataUsuario(res.locals.user))
}

tercero.insertar = (req, res) => {
    res.render('tercero/insertarTercero', helpers.getDataUsuario(res.locals.user))
}

tercero.actualizar = (req, res) => {
    res.render('tercero/actualizarTercero', helpers.getDataUsuario(res.locals.user))
}

tercero.eliminar = (req, res) => {
    res.render('tercero/eliminarTercero', helpers.getDataUsuario(res.locals.user))
}

module.exports = tercero
