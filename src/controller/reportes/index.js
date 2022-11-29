const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const reportes = {}

reportes.cargar = (req, res) => {
    res.render('reportes/reporteFacturas', helpers.getDataUsuario(res.locals.user))
}

reportes.facturas = (req, res) => {
    res.render('reportes/facturas', helpers.getDataUsuario(res.locals.user))
}

reportes.tercero = (req, res) => {
    res.render('reportes/tercero', helpers.getDataUsuario(res.locals.user))
}

reportes.producto = (req, res) => {
    res.render('reportes/producto', helpers.getDataUsuario(res.locals.user))
}

module.exports = reportes
