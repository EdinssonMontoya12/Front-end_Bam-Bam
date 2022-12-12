const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const producto = require('../../Dao/productoDao');
const tercero = require('../../Dao/terceroDao');
const lote = require('../../Dao/loteDao');
const facturaDao = require('../../Dao/facturacionDao');
const consecutivo = require('../../Dao/consecutivoDao')

const facturacion = {}

facturacion.consultar = async (req, res) => {

    const facturas = await facturaDao.consultar(res.locals.user.sucid, 'FC', '**')
    
    console.log(facturas)

    res.render('facturacion/verfacturaCompra', helpers.getDataUsuario(res.locals.user, facturas.DATA))
}

facturacion.insertar = async (req, res) => {

    var dataProducto = await producto.consultar(res.locals.user.sucid, '**')
    var dataLotes = await lote.consultar(res.locals.user.sucid, '**')
    var dataTerceros = await tercero.consultar(res.locals.user.sucid, '**', 'PROV')
    var dataConsecutivo = await consecutivo.consultar(res.locals.user.sucid, 'FC')

    const data = {
        productos: dataProducto.DATA,
        lotes: dataLotes.DATA,
        terceros: dataTerceros.DATA,
        consecutivo: dataConsecutivo.DATA
    }

    res.render('facturacion/insertarfacturaCompra', helpers.getDataUsuario(res.locals.user, data))
}

facturacion.actualizar = async (req, res) => {
    var dataProducto = await producto.consultar(res.locals.user.sucid, '**')
    var dataLotes = await lote.consultar(res.locals.user.sucid, '**')
    var dataTerceros = await tercero.consultar(res.locals.user.sucid, '**', 'PROV')
    var dataFactura = await facturaDao.consultarXid(req.params.id);
    var dataDeFactura = await facturaDao.getDetalle(req.params.id);
    
    const data = {
        productos: dataProducto.DATA,
        lotes: dataLotes.DATA,
        terceros: dataTerceros.DATA,
        factura: dataFactura.DATA,
        detalleFac: dataDeFactura.DATA
    }

    res.render('facturacion/actualizarFacturaCompra', helpers.getDataUsuario(res.locals.user, data))
}

facturacion.eliminar = async (req, res) => {
    res.render('facturacion/eliminarfactura', helpers.getDataUsuario(res.locals.user))
}

facturacion.asentar = async (req, res) => {

    const factura = await facturaDao.asentarCompra(req.params.id)

    res.redirect('/facturacompra')

}

module.exports = facturacion
