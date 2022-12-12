const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const grupoDao = require('../../Dao/grupoproductoDao');
const grupo = require('../../Dao/grupoproductoDao');

const grupoproducto = {}

grupoproducto.consultar = async (req, res) => {
    
    const response = await grupoDao.consultar(res.locals.user.sucid, '**')

    res.render('inventario/grupoproducto/vergrupoproducto', helpers.getDataUsuario(res.locals.user, response.DATA))
}

grupoproducto.insertar = (req, res) => {

    res.render('inventario/grupoproducto/insertargrupoproducto', helpers.getDataUsuario(res.locals.user))
}

grupoproducto.insertardao = async (req, res) => {

    const response = await grupoDao.insertar(res.locals.user.sucid, req.body)

    if(response.OSUCCESS === 1) {
        res.redirect('/grupoproducto')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect('/grupoproducto/insertar')
    }    
}

grupoproducto.eliminar = async (req, res) => {

    const response = await grupoDao.eliminar(req.params.id)

    if(response.OSUCCESS === 1) {
        res.redirect('/grupoproducto')
    }else {
        req.flash('error', response.OMENSAJE)
        res.redirect('/grupoproducto')
    }
}

grupoproducto.actualizar = async (req, res) => {
    
    const response = await grupoDao.consultarXid(req.params.id)
    
    res.render('inventario/grupoproducto/actualizargrupo', helpers.getDataUsuario(res.locals.user, response.DATA))
}

grupoproducto.actualizardao = async (req, res) => {
    
    const response = await grupoDao.actualizar(req.params.id, req.body)
    
    if(response.OSUCCESS === 1) {
        res.redirect('/grupoproducto')
    }else {
        req.flash('error', response.OMENSAJE)
        res.redirect(`/grupoproducto/actualizar/${req.params.id}`)
    }
}

module.exports = grupoproducto