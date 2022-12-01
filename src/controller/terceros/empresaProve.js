const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const empresaProve = {}

empresaProve.consultar = async (req, res) => {

    var data = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)

    var data = await data.json()

    console.log(data)

    res.render('tercero/verEmpresasProve', helpers.getDataUsuario(res.locals.user, data.DATA))
}

empresaProve.insertar = (req, res) => {
    res.render('tercero/insertarEmpresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.actualizar = (req, res) => {
    res.render('tercero/actualizarEmresaProve', helpers.getDataUsuario(res.locals.user))
}

empresaProve.eliminar = (req, res) => {
    res.render('/empresaProve')
}

module.exports = empresaProve
