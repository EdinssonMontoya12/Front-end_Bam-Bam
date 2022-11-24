const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const empresaProve = {}

empresaProve.consultar = (req, res) => {
    res.render('tercero/verEmpresasProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.insertar = (req, res) => {
    res.render('tercero/insertartercero', helpers.getDataUsuario(res.locals.user))
}

empresaProve.actualizar = (req, res) => {
    res.render('tercero/actualizartercero', helpers.getDataUsuario(res.locals.user))
}

empresaProve.eliminar = (req, res) => {
    res.render('tercero/eliminartercero', helpers.getDataUsuario(res.locals.user))
}

module.exports = empresaProve
