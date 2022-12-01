const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const lote = {}

lote.verlote = async(req, res) => {
    var lote = await fetch(`${process.env.HOST_BACKEND}/lote/${res.locals.user.sucid}/**`)
    
    lote = await lote.json()
    
    res.render('inventario/lote/verlote', helpers.getDataUsuario(res.locals.user,lote.DATA))
}
lote.insertarlote = (req, res) => {
    res.render('inventario/lote/insertarlote', helpers.getDataUsuario(res.locals.user))
}

module.exports = lote