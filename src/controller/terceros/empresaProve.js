const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const empresaProve = {}

empresaProve.consultar = async(req, res) => {
    var empresa = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)
    
    empresa = await empresa.json()
    
    res.render('tercero/verEmpresasProve', helpers.getDataUsuario(res.locals.user, empresa.DATA))
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
