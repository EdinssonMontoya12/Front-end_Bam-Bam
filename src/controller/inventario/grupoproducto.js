const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const grupoproducto = {}
grupoproducto.insertargruppro = (req, res) => {
    res.render('inventario/grupoproducto/insertargrupoproducto', helpers.getDataUsuario(res.locals.user))
}
grupoproducto.vergruppro = (req, res) => {
    res.render('inventario/grupoproducto/vergrupoproducto', helpers.getDataUsuario(res.locals.user))
}

module.exports = grupoproducto