const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const lote = {}

lote.verlote = (req, res) => {
    res.render('inventario/lote/verlote', helpers.getDataUsuario(res.locals.user))
}
lote.insertarlote = (req, res) => {
    res.render('inventario/lote/insertarlote', helpers.getDataUsuario(res.locals.user))
}

module.exports = lote