const fetch = require('node-fetch');

const usuario = {}

usuario.consultarXid = async (userid) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/usuario/${userid}`)
        .then(data => data.json())

    return response
}

usuario.insertar = async (usuario) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    }).then( data => data.json())

    return response
}

usuario.desactivar = async (userid) => {

    const response = fetch(`${process.env.HOST_BACKEND}/usuario/${userid}`, {
        method: 'DELETE'
    }).then(data => data.json())

    return response
}

usuario.actualizar = async (userid, usuario) => {

    const response = fetch(`${process.env.HOST_BACKEND}/usuario/${userid}`, {
        method : 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    }).then( data => data.json())

    return response
}

module.exports = usuario