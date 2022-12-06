const fetch = require('node-fetch');

const lote = {}

lote.consultar = async (sucid, texto) => {

    const lote = await fetch(`${process.env.HOST_BACKEND}/lote/${sucid}/${texto}`)
        .then(data => data.json())

    return lote
}

module.exports = lote