const helpers = {}

//El producto esta disponible o No
helpers.disponible = (activo) => {
    if (activo > 0) {
        return activo > 0 ? 'disponible' : '1'
    }
    else {
        return activo == 0 ? 'No disponible' : '0'
    }
}

helpers.format = (fecha) => {
    const mes = fecha;

    const newmes = mes.slice(0, 10);
    console.log(newmes)
    return newmes;


}



helpers.disponibleBox = (activo) => {
    if (activo > 0) {
        return activo > 0 ? 'badge badge-success' : '1'
    }
    else {
        return activo == 0 ? 'badge badge-warning' : '0'
    }
}



//El Tipo de Tercero
helpers.clasif = (codRol) => {
    if (codRol === 'CLI') 
        return 'Cliente'

    if (codRol === 'PROV') 
        return 'Proveedor'

    if (codRol === 'GENE') 
        return 'General'
}


helpers.clasifBox = (codRol) => {
    if (codRol === 'CLI') 
        return 'badge badge-success'

    if (codRol === 'PROV') 
        return 'badge badge-secondary'

    if (codRol === 'GENE') 
        return 'badge badge-primary'
}

helpers.esAdmin = (rol) => {
    return rol === 'ADMIN' ? true : false
}

module.exports = helpers