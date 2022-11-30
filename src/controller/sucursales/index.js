const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const sucursales = {}

sucursales.consultar = (req, res) => {
    res.render('sucursales/verSucursales', helpers.getDataUsuario(res.locals.user))
}

sucursales.insertar = (req, res) => {
    res.render('sucursales/insertarSucursal', helpers.getDataUsuario(res.locals.user))
}



module.exports = sucursales
