const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const usuario = {}

usuario.consultar = async (req, res) => {
    var usuario = await fetch(`${process.env.HOST_BACKEND}/usuario/${res.locals.user.sucid}/**`)

    usuario = await usuario.json()
    console.log(usuario)

    res.render('usuario/verUsuarios', helpers.getDataUsuario(res.locals.user, usuario.DATA))
}

usuario.insertar = (req, res) => {
    res.render('usuario/insertarUsuario', helpers.getDataUsuario(res.locals.user))
}

usuario.actualizar = (req, res) => {
    res.render('usuario/actualizarUsuario', helpers.getDataUsuario(res.locals.user))
}

usuario.eliminar = (req, res) => {
    res.render('usuario/eliminarUsuario', helpers.getDataUsuario(res.locals.user))
}

module.exports = usuario
