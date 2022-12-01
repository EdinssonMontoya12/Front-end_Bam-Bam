const { response } = require('express');
const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const tercero = {}

tercero.consultar = async (req, res) => {
    var tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${res.locals.user.sucid}/**`)

    tercero = await tercero.json()

    res.render('tercero/verTerceros', helpers.getDataUsuario(res.locals.user, tercero.DATA))
}

tercero.insertar = async (req, res) => {

    var data = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)

    var data = await data.json()

    res.render('tercero/insertarTercero', helpers.getDataUsuario(res.locals.user, data.DATA))
}

tercero.actualizar = (req, res) => {
    res.render('tercero/actualizarTercero', helpers.getDataUsuario(res.locals.user))
}

tercero.eliminar = async (req, res) => {

    const data = await fetch(`${process.env.HOST_BACKEND}/tercero/${req.params.id}`, {
        method: 'DELETE'
    })

    console.log(await data.json())

    res.redirect('/tercero')
}

tercero.insertarDao = async (req, res) => {

    const tercero = {
        identificacion: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.email,
        telefono: req.body.telefono,
        codigo: req.body.codigo,
        codtipo: req.body.radio1,
        sucid: res.locals.user.sucid,
        codempresaprod: req.body.selectEmpresa
    }

    console.log(tercero)

    await fetch(`${process.env.HOST_BACKEND}/tercero`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tercero)
    })

    res.redirect('/tercero')
}

module.exports = tercero
