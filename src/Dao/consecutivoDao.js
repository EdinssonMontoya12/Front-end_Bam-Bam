const fetch = require('node-fetch');

const consecutivo = {}

consecutivo.consultar = async (codfac, sucid) => {
    
    const consecutivo = await fetch(`${process.env.HOST_BACKEND_FACTURA}/consecutivo/${sucid}/${codfac}`)
        .then(data => data.json())

    return consecutivo        
}

module.exports = consecutivo