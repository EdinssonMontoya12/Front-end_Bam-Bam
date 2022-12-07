const fetch = require('node-fetch');

const factura = {}

factura.insertar = async (factura) => {
    const facturaData = JSON.parse(factura)
}

factura.consultar = async (sucid, tipofac, texto) => {

    const facturas = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/${sucid}/${texto}/${tipofac}`)
        .then(data => data.json())

    return facturas
}

factura.consultarXid = async (facturaid) => {

    const factura = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/${facturaid}`)
        .then(data => data.json())

    return factura
}

factura.getDetalle = async (facturaid) => {

    const defactura = await fetch(`${process.env.HOST_BACKEND_FACTURA}/defactura/${facturaid}`)
        .then(data => data.json())

    return defactura
}

factura.asentar = async (facturaid) => {

    var detalle = await factura.getDetalle(facturaid)
    detalle = {
        detalles: detalle.DATA
    }

    const sePuedeAsentar = await fetch(`${process.env.HOST_BACKEND}/factura/asentar/venta`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detalle)
    }).then(data => data.json())

    var date = new Date().toLocaleDateString('es-CO')
    date = date.replace('/', '-').replace('/', '-')

    if (sePuedeAsentar.OSUCCESS === 1) {
        const response = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/asentar/${facturaid}/${date}`, {
            method: 'PUT'
        }).then(data => data.json())

        return response;
    } else {
        return {
            OSUCCESS: 0,
            OMENSAJE: 'No se ha logrado asentar la factura'
        }
    }
}

factura.asentarCompra = async (facturaid) => {

    var detalle = await factura.getDetalle(facturaid)
    detalle = {
        detalles: detalle.DATA
    }
    console.log(detalle)
    await fetch(`${process.env.HOST_BACKEND}/factura/asentar/compra`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detalle)
    }).then(data => data.json())

    var date = new Date().toLocaleDateString('es-CO')
    date = date.replace('/', '-').replace('/', '-')

    const response = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/asentar/${facturaid}/${date}`, {
        method: 'PUT'
    }).then(data => data.json())

    return response;
}

factura.reversar = async (facturaid) => {
    
    var detalle = await factura.getDetalle(facturaid)
    detalle = {
        detalles: detalle.DATA
    }

    const response = await fetch(`${process.env.HOST_BACKEND}/factura/reversar/venta`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detalle)
    }).then(data => data.json())

    if(response.OSUCCESS === 1){
        const result = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/reversar/${facturaid}`)
            .then(data => data.json())

        return result
    }else{
        return {
            OSUCCESS: 0,
            OMENSAJE: 'No se ha logrado reversar la factura'
        }
    }
}

factura.reversarCompra = async (facturaid) => {
    
    var detalle = await factura.getDetalle(facturaid)
    detalle = {
        detalles: detalle.DATA
    }

    const response = await fetch(`${process.env.HOST_BACKEND}/factura/reversar/venta/${facturaid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detalle)
    }).then(data => data.json())

    if(response.OSUCCESS === 1){
        const result = await fetch(`${process.env.HOST_BACKEND_FACTURA}/factura/revesar/${facturaid}`)
            .then(data => data.json())

        return result
    }else{
        return {
            OSUCCESS: 0,
            OMENSAJE: 'No se ha logrado reversar la factura'
        }
    }
}

factura.sePuedeReversar = async (facturaid) => {
    return true;
}

module.exports = factura