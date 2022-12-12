const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const usuarioDao = require('../../Dao/usuarioDao')
const sucursalDao = require('../../Dao/sucursalDao')

const usuario = {}

usuario.consultar = async (req, res) => {
    var usuario = await fetch(`${process.env.HOST_BACKEND}/usuario/${res.locals.user.sucid}/**`)

    usuario = await usuario.json()
    console.log(usuario)

    res.render('usuario/verUsuarios', helpers.getDataUsuario(res.locals.user, usuario.DATA))
}

usuario.insertar = async(req, res) => {

    const sucursalData = await sucursalDao.consultar('**')

    res.render('usuario/insertarUsuario', helpers.getDataUsuario(res.locals.user, sucursalData.DATA))
}

usuario.insertardao = async(req, res) => {

    if(req.body.checkcontrasenia === req.body.contrasenia){
        
        const usuario = {
            username: req.body.username,
            contrasenia: req.body.contrasenia,
            radio1: req.body.radio1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            sucursal: req.body.sucursal.split('/')[0].trim(),
            email: req.body.email
        }

        const response = await usuarioDao.insertar(usuario)

        if(response.OSUCCESS === 1){
            req.flash('success', response.OMENSAJE)
            res.redirect('/usuario')
        }else {
            req.flash('error', response.OMENSAJE)
            res.redirect('/usuario/insertar')
        }

    }else{
        req.flash('error', 'Las contraseñas no coinciden')
        res.redirect('/usuario/insertar')
    }
}

usuario.actualizar = async (req, res) => {

    const sucursalData = await sucursalDao.consultar('**')
    const usuarioData = await usuarioDao.consultarXid(req.params.id)
    console.log(usuarioData)
    const data = {
        sucursal: sucursalData.DATA,
        usuario: usuarioData.DATA
    }
    
    res.render('usuario/actualizarUsuario', helpers.getDataUsuario(res.locals.user, data))
}

usuario.actualizardao = async (req, res) => {

    if(req.body.checkcontrasenia === req.body.contrasenia){

        const response = await usuarioDao.actualizar(req.params.id, req.body)

        if(response.OSUCCESS === 1){
            res.redirect('/usuario')
        }else{ 
            req.flash('error', response.OMENSAJE)
            res.redirect(`/usuario/actualizar/${req.params.id}`)
        }
    }else{
        req.flash('error', 'Las contraseñas no coinciden')
        res.redirect(`/usuario/actualizar/${req.params.id}`)
    }

    
}

usuario.eliminar = async (req, res) => {

    const response = await usuarioDao.desactivar(req.params.id)

    if(response.OSUCCESS === 0){
        req.flash('error', 'No se ha podido eliminar el usuario')
    }
        
    res.redirect('/usuario')
}

module.exports = usuario
