const fetch = require('node-fetch');
const consecutivoDao = require('../Dao/consecutivoDao')

const sucursal = {};

sucursal.consultar = async (texto) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/sucursal/1/${texto}`)
        .then(data => data.json())

    return response
}

sucursal.insertar = async (sucursal) => {

    const response = await fetch(`${process.env.HOST_BACKEND}/sucursal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sucursal)
    }).then( data => data.json())

    await consecutivoDao.insertar(response.ID)

    return response
}

module.exports = sucursal