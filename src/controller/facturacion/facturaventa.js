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

facturacion.verFacturaId = async (req, res) => {

    const factura = await facturaDao.consultarXid(req.params.id)
    const defactura = await facturaDao.getDetalle(req.params.id)

    const data = {
        factura: factura.DATA,
        defactura: defactura.DATA
    }

    if(req.params.tipo === 'FV')
        res.render('facturacion/verDeFactura', helpers.getDataUsuario(res.locals.user, data))
    else
        res.render('facturacion/verDeFacturaCompra', helpers.getDataUsuario(res.locals.user, data))
    
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

    var dataProducto = await producto.consultar(res.locals.user.sucid, '**')
    var dataLotes = await lote.consultar(res.locals.user.sucid, '**')
    var dataTerceros = await tercero.consultar(res.locals.user.sucid, '**', 'CLI')
    var dataFactura = await facturaDao.consultarXid(req.params.id);
    var dataDeFactura = await facturaDao.getDetalle(req.params.id);
    console.log(dataFactura)
    const data = {
        productos: dataProducto.DATA,
        lotes: dataLotes.DATA,
        terceros: dataTerceros.DATA,
        factura: dataFactura.DATA,
        detalleFac: dataDeFactura.DATA
    }

    res.render('facturacion/actualizarFactura', helpers.getDataUsuario(res.locals.user, data))
}

facturacion.eliminar = async (req, res) => {

    const result = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/${req.params.id}`,{
        method: 'DELETE',
    }).then(data => data.json())

    if(result.OSUCCESS  === 1){
        req.flash('success', result.OMENSAJE)
        res.redirect('/factura')
    }else{
        req.flash('error', result.OMENSAJE)
        res.redirect('/factura')
    }
}

facturacion.asentar = async (req, res) => {

    const factura = await facturaDao.asentar(req.params.id)

    if(factura.OSUCCESS === 1){
        req.flash('success', factura.OMENSAJE)
        res.redirect('/factura')
    }else{
        req.flash('error', factura.OMENSAJE)
        res.redirect('/factura')
    }
}

facturacion.reversar = async (req, res) => {
    
    const factura = await facturaDao.reversar(req.params.id)

    if(factura.OSUCCESS === 1){
        req.flash('success', factura.OMENSAJE)
        res.redirect('/factura') 
    }else{
        req.flash('error', factura.OMENSAJE)
        res.redirect('/factura')
    }
}


module.exports = facturacion
