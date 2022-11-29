const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const facturacion = {}

facturacion.consultar = async (req, res) => {
    res.render('facturacion/verfacturas', helpers.getDataUsuario(res.locals.user))
}

facturacion.insertar = async (req, res) => {
    res.render('facturacion/insertarfacturaVenta', helpers.getDataUsuario(res.locals.user))
}

facturacion.actualizar = async (req, res) => {
    res.render('facturacion/actualizarfactura', helpers.getDataUsuario(res.locals.user))
}

facturacion.eliminar = async (req, res) => {
    res.render('facturacion/eliminarfactura', helpers.getDataUsuario(res.locals.user))
}

module.exports = facturacion
