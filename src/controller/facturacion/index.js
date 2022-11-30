const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const facturacion = {}

facturacion.consultar = async (req, res) => {
    res.render('facturacion/verfacturaVenta', helpers.getDataUsuario(res.locals.user))
}

facturacion.consultarCompra = async (req, res) => {
    res.render('facturacion/verfacturaCompra', helpers.getDataUsuario(res.locals.user))
}

facturacion.insertar = async (req, res) => {

    /*var dataProducto = await fetch(`${process.env.HOST_BACKEND}/articulo/${res.locals.user.userid}/**`)
    dataProducto = await data.json()

    var dataLotes = await fetch(`${process.env.HOST_BACKEND}/lotes/${res.locals.user.userid}/**`)
    dataLotes = await data.json()*/

    res.render('facturacion/insertarfacturaVenta', helpers.getDataUsuario(res.locals.user))
}

facturacion.insertarCompra = async (req, res) => {
    res.render('facturacion/insertarfacturaCompra', helpers.getDataUsuario(res.locals.user))
}

facturacion.actualizar = async (req, res) => {
    res.render('facturacion/actualizarfactura', helpers.getDataUsuario(res.locals.user))
}

facturacion.eliminar = async (req, res) => {
    res.render('facturacion/eliminarfactura', helpers.getDataUsuario(res.locals.user))
}

module.exports = facturacion
