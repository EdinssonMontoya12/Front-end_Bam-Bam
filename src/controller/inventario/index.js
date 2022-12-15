const helpers = require('../../lib/helpers');
const articuloDao = require('../../Dao/articuloDao')
const grupoproductoDao = require('../../Dao/grupoproductoDao')

const inventario = {}

inventario.consultar = async (req, res) => {
    
    const response = await articuloDao.consultar(res.locals.user.sucid, '**', 0)  
    
    const data = {
        articulo: response.DATA,
        rol: res.locals.user.ROL
    }

    res.render('inventario/producto/verProductos', helpers.getDataUsuario(res.locals.user, data))
}

inventario.insertar = async (req, res) => {

    const grupoProData = await grupoproductoDao.consultar(res.locals.user.sucid, '**') 

    res.render('inventario/producto/insertarProducto', helpers.getDataUsuario(res.locals.user, grupoProData.DATA))
}

inventario.insertardao = async (req, res) => {

    const response = await articuloDao.insertar(res.locals.user.sucid, req.body)

    if(response.OSUCCESS === 1){
        res.redirect('/inventario')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect('/inventario/insertar')
    }
}

inventario.actualizar = async (req, res) => {

    const articuloData = await articuloDao.consultarXid(req.params.id)
    const grupoartData = await grupoproductoDao.consultar(res.locals.user.sucid, '**')

    const data = {
        articulo: articuloData.DATA,
        grupo: grupoartData.DATA
    }

    res.render('inventario/producto/actualizarProducto', helpers.getDataUsuario(res.locals.user, data))
}

inventario.actualizardao = async (req, res) => {

    const response = await articuloDao.actualizar(req.params.id, req.body)

    if(response.OSUCCESS === 1){
        res.redirect('/inventario')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect(`/inventario/actualizar/${req.params.id}`)
    }
}

inventario.activar = async (req, res) => {

    await articuloDao.activar(req.params.id)

    res.redirect('/inventario')    
}

inventario.eliminar = async (req, res) => {

    const response = await articuloDao.eliminar(req.params.id)

    if(response.OSUCCESS === 1){
        res.redirect('/inventario')
    }else {
        req.flash('error', response.OMENSAJE)
        res.redirect('/inventario')
    }
}

inventario.cargarinfo = async (req, res) => {

    res.render('inventario/producto/cargarproducto')

}


module.exports = inventario