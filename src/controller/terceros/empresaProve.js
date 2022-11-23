const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const empresaProve = {}

empresaProve.consultar = (req, res) => {
    res.render('empresaProve/verEmpresasProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.insertar = (req, res) => {
    res.render('empresaProve/insertarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.actualizar = (req, res) => {
    res.render('empresaProve/actualizarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.eliminar = (req, res) => {
    res.render('empresaProve/eliminarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

module.exports = empresaProve
