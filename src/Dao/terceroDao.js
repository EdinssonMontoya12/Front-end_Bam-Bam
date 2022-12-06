const fetch = require('node-fetch');

const tercero = {}

tercero.consultar = async (sucid, texto, tiporter) => {

    const tercero = await fetch(`${process.env.HOST_BACKEND}/tercero/${sucid}/${texto}/${tiporter}`)
        .then(data => data.json())

    return tercero
}

module.exports = tercero