const fetch = require('node-fetch');
const deFactDao = require('./facturacionDao');

const articulo = {}

articulo.consultar = async (sucid, texto, activo) => {

    if(activo != 0) activo = 1

    const response = await fetch(`${process.env.HOST_BACKEND}/articulo/${sucid}/${texto}/${activo}`)
        .then(data => data.json())

    return response
}

articulo.insertar = async (sucid, articulo) => {

    articulo.sucid = sucid

    const response = await fetch(`${process.env.HOST_BACKEND}/articulo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articulo)
    }).then(data => data.json())

    return response
}

articulo.eliminar = async (articuloid) => {

    const eliminar = await deFactDao.sePuedeEliminarProducto(articuloid)
    console.log(eliminar)
    if(eliminar.OSUCCESS == 1){
        const response = await fetch(`${process.env.HOST_BACKEND}/articulo/${articuloid}`, {
            method: 'DELETE',
        }).then(data => data.json())
    
        return response
    }else{
        return eliminar
    }    
}

articulo.activar = async (articuloid) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/articulo/activar/${articuloid}`, {
        method: 'PUT',
    }).then(data => data.json())

    return response
}

articulo.actualizar = async (articuloid, articulo) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/articulo/${articuloid}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(articulo)
    }).then( data => data.json())

    return response
}

articulo.consultarXid = async (articuloid) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/articulo/${articuloid}`)
        .then(data => data.json())

    return response
}

module.exports = articulo