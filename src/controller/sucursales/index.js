const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const sucursales = {}

sucursales.consultar = async(req, res) => {
    var sucursal = await fetch(`${process.env.HOST_BACKEND}/sucursal/${res.locals.user.sucid}/**`);

    sucursal = await sucursal.json()
    console.log(sucursal)

    res.render('sucursales/verSucursales', helpers.getDataUsuario(res.locals.user, sucursal.DATA))

}

sucursales.insertar = (req, res) => {
    res.render('sucursales/insertarSucursal', helpers.getDataUsuario(res.locals.user))
}



module.exports = sucursales
