const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const empresaProve = {}

empresaProve.consultar = (req, res) => {
    res.render('tercero/verEmpresasProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.insertar = (req, res) => {
    res.render('tercero/insertarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.actualizar = (req, res) => {
    res.render('tercero/actualizarEmresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.eliminar = (req, res) => {
    res.render('/empresaProve')
}

module.exports = empresaProve
