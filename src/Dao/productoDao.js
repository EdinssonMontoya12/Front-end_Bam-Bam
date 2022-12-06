const fetch = require('node-fetch');

const producto = {}

producto.consultar = async (sucid, texto) => {

    const producto = await fetch(`${process.env.HOST_BACKEND}/articulo/${sucid}/${texto}`)
        .then(data => data.json())

    return producto
}

module.exports = producto