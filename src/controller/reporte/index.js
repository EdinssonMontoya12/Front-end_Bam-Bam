const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const reporte = {}

reporte.cargar = (req, res) => {
    res.render('reportes/reporteFacturas', helpers.getDataUsuario(res.locals.user))
}

module.exports = reporte
