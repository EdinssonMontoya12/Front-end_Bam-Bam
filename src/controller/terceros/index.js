const { response } = require('express');
const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const tercero = {}

tercero.consultar = async (req, res) => {
    var tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${res.locals.user.sucid}/**/**`)

    tercero = await tercero.json()

    res.render('tercero/verTerceros', helpers.getDataUsuario(res.locals.user, tercero.DATA))
}

tercero.insertar = async (req, res) => {

    var data = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)

    var data = await data.json()

    res.render('tercero/insertarTercero', helpers.getDataUsuario(res.locals.user, data.DATA))
}

tercero.actualizar = async (req, res) => {

    var tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${req.params.id}`)
        .then( data => data.json())

    if(tercero.OSUCCESS === 0){
        req.flash('error', tercero.OMENSAJE)
    }

    var empresasProve = await fetch(`${process.env.HOST_BACKEND}/empresaProv/${res.locals.user.sucid}/**`)
        .then(data => data.json())

    const data = {
        tercero: tercero.DATA[0],
        empresaProve: empresasProve.DATA
    }

    res.render('tercero/actualizarTercero', helpers.getDataUsuario(res.locals.user, data))

}

tercero.eliminar = async (req, res) => {

    var data = await fetch(`${process.env.HOST_BACKEND}/tercero/${req.params.id}`, {
        method: 'DELETE'
    })

    data = await data.json()

    console.log(data)

    if(data.OSUCCESS === 1){
        req.flash('success', data.OMENSAJE)
        res.redirect('/tercero')
    }else{
        req.flash('error', data.OMENSAJE)
        res.redirect('/tercero')
    }
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
        codempresaprod: req.body.selectEmpresa.split('/')[0]
    }

    var response = await fetch(`${process.env.HOST_BACKEND}/tercero`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tercero)
    })

    response = await response.json()

    if(response.OSUCCESS === 1){
        req.flash('success', response.OMENSAJE)
        res.redirect('/tercero')
    }else{
        req.flash('error', response.OMENSAJE)
        res.redirect('/tercero/insertar')
    }
}

tercero.actualizarDao = async (req, res) => {

    const tercero = {
        identificacion: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.email,
        telefono: req.body.telefono,
        codigo: req.body.codigo,
        codtipo: req.body.radio1,
        sucid: res.locals.user.sucid,
        codempresaprod: req.body.selectEmpresa.split('/')[0]
    }   

    var response = await fetch(`${process.env.HOST_BACKEND}/tercero/${req.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tercero)
    }).then( data => data.json())

    if(response.OSUCCESS === 1){
        req.flash('success', response.OMENSAJE)
        res.redirect('/tercero/')
    }else {
        req.flash('error', response.OMENSAJE)
        res.redirect(`/tercero/actualizar/${req.params.id}`)
    }
}

module.exports = tercero
