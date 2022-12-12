const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const loteDao = require('../../Dao/loteDao')
const productoDao = require('../../Dao/productoDao')

const lote = {}

lote.consultar = async (req, res) => {
    
    const response = await loteDao.consultar(res.locals.user.sucid, '**')
    
    res.render('inventario/lote/verlote', helpers.getDataUsuario(res.locals.user, response.DATA))
}
lote.insertar = async (req, res) => {

    const response = await productoDao.consultar(res.locals.user.sucid, '**')

    res.render('inventario/lote/insertarlote', helpers.getDataUsuario(res.locals.user, response.DATA))
}

lote.insertardao = async (req, res) => {

    const response = await loteDao.insertar(res.locals.user.sucid, req.body)

    if(response.OSUCCESS === 1) {
        res.redirect('/lote')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect('/lote/insertar')
    }

}

module.exports = lote