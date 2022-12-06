const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const producto = require('../../Dao/productoDao');
const tercero = require('../../Dao/terceroDao');
const lote = require('../../Dao/loteDao');
const facturaDao = require('../../Dao/facturacionDao');
const consecutivo = require('../../Dao/consecutivoDao')

const facturacion = {}

facturacion.consultar = async (req, res) => {

    console.log(`${process.env.HOST_BACKEND_FACTURA}/factura/${res.locals.user.sucid}/**/FV`)

    const facturas = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/${res.locals.user.sucid}/**/FV`)
        .then(data => data.json())
        
    res.render('facturacion/verfacturaVenta', helpers.getDataUsuario(res.locals.user, facturas.DATA))
}

facturacion.insertar = async (req, res) => {

    var dataProducto = await producto.consultar(res.locals.user.sucid, '**')
    var dataLotes = await lote.consultar(res.locals.user.sucid, '**')
    var dataTerceros = await tercero.consultar(res.locals.user.sucid, '**', 'CLI')
    var dataConsecutivo = await consecutivo.consultar(res.locals.user.sucid, 'FV')

    const data = {
        productos: dataProducto.DATA,
        lotes: dataLotes.DATA,
        terceros: dataTerceros.DATA,
        consecutivo: dataConsecutivo.DATA
    }

    res.render('facturacion/insertarfacturaVenta', helpers.getDataUsuario(res.locals.user, data))
}

facturacion.actualizar = async (req, res) => {
    res.render('facturacion/actualizarfactura', helpers.getDataUsuario(res.locals.user))
}

facturacion.eliminar = async (req, res) => {
    res.render('facturacion/eliminarfactura', helpers.getDataUsuario(res.locals.user))
}

facturacion.insertarventaDao = async (req, res) => {
    facturaDao.insertar(req.params.factura)
    
    res.redirect('/factura')
}

facturacion.asentar = async (req, res) => {

    const factura = await facturaDao.asentar(req.params.id)

    res.redirect('/factura')
}

module.exports = facturacion
