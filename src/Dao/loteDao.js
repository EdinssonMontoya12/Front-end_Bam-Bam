const { response } = require('express');
const fetch = require('node-fetch');

const lote = {}

lote.consultar = async (sucid, texto) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/lote/${sucid}/${texto}`)
        .then(data => data.json())

    return response
}

lote.insertar = async (sucid, lote) => {

    lote.sucid = sucid

    const response = await fetch(`${process.env.HOST_BACKEND}/lote`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(lote)
    }).then(data => data.json())

    return response
}

module.exports = lote