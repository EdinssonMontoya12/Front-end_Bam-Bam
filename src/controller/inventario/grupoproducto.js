const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const grupoproducto = {}

grupoproducto.insertargruppro = (req, res) => {

    res.render('inventario/grupoproducto/insertargrupoproducto', helpers.getDataUsuario(res.locals.user))
}
grupoproducto.vergruppro = async (req, res) => {
    var grupo = await fetch(`${process.env.HOST_BACKEND}/grupoProducto/${res.locals.user.sucid}/**`)
    
    grupo = await grupo.json()
    console.log(grupo)
    res.render('inventario/grupoproducto/vergrupoproducto', helpers.getDataUsuario(res.locals.user, grupo.DATA))
}

module.exports = grupoproducto