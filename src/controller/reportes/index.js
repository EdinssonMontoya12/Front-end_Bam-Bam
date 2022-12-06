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

reportes.producto = async (req, res) => {

    const data = await fetch(`${process.env.HOST_BACKEND_FACTURA}/reporte/kardexxarticulo/${res.locals.user.sucid}`)
        .then(data => data.json())

    console.log(data)

    res.render('reportes/producto', helpers.getDataUsuario(res.locals.user, data.DATA))
}

module.exports = reportes
