const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const empresaDao = require('../../Dao/empresaprovDao')

const empresaProve = {}

empresaProve.consultar = async(req, res) => {
    var empresa = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)
    
    empresa = await empresa.json()
    
    res.render('tercero/verEmpresasProve', helpers.getDataUsuario(res.locals.user, empresa.DATA))
}

empresaProve.insertar = (req, res) => {
    res.render('tercero/insertarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.insertardao = async (req, res) => {

    const empresa = req.body
    empresa.sucid = res.locals.user.sucid

    const response = await empresaDao.insertar(empresa)

    if(response.OSUCCESS === 1){
        res.redirect('/empresaProve')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect('/empresaProve/insertar')
    }
}

empresaProve.actualizar = async (req, res) => {

    const response = await empresaDao.consultarXid(req.params.id)

    res.render('tercero/actualizarEmpresaProve', helpers.getDataUsuario(res.locals.user, response.DATA))
}

empresaProve.actualizardao = async (req, res) => {

    const response = await empresaDao.actualizar(req.params.id, req.body)
    console.log(response)
    if(response.OSUCCESS === 1){
        res.redirect('/empresaProve')
    }else{
        req.flash('error', response.OMENSAJE)        
        res.redirect(`/empresaProve/actualizar/${req.params.id}`)
    }
}

empresaProve.eliminar = async (req, res) => {

    const response = await empresaDao.eliminar(req.params.id)

    if(response.OSUCCESS === 1){
        res.redirect('/empresaProve/')
    }else {
        req.flash('error', response.OMENSAJE)
        res.redirect('/empresaProve')
    }

}

module.exports = empresaProve
