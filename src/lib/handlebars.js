const helper = require("./helpers");

const formatCOP = {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
}

const copString = new Intl.NumberFormat('es-CO', formatCOP)

const fechaFormat = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};

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

helpers.disponibleBox = (activo) => {
    if (activo > 0) {
        return activo > 0 ? 'badge badge-success' : '1'
    }
    else {
        return activo == 0 ? 'badge badge-warning' : '0'
    }
}

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

helpers.esAux = (rol) => {
    console.log(rol)
    return !rol
}

helpers.tipoTerCLI = (codTipoTer) => {
    console.log(codTipoTer)
    return codTipoTer === 'CLI' ? 'checked' : ''
}

helpers.tipoTerPROV = (codTipoTer) => {
    return codTipoTer === 'PROV' ? 'checked' : ''
}

helpers.decimalToCop = (decimal) => {
    console.log(decimal)
    return copString.format(decimal)
}

helpers.fechaFormats = (fecha) => {
    if (fecha) {
        const date = new Date(fecha)
        return date.toLocaleDateString('es-CO', fechaFormat)
    } else {
        return ''
    }
}

helpers.getFecha = () => {
    return new Date().toLocaleDateString('es-CO')
}

helpers.jsonString = (json) => {
    return JSON.stringify(json)
}

helpers.formatConsecutivo = (numero) => {
    numero = numero.toString()
    while (numero.length < 4) {
        numero = '0' + numero
    }
    return numero
}

helpers.showButtons = (fechasent) => {
    if (fechasent == '') {
        return ''
    } else {
        return ''
    }
}

helpers.totalInv = (compra, venta) => {
    return compra - venta
}

helpers.countObj = (obj) => {
    return obj.length
}

helpers.selectedxval = (valorComp, valorAc) => {
    if(valorComp == valorAc) return 'selected'
}

helpers.checkedUserRol = (codRol, esperado) => {
    if(codRol == esperado) return 'checked'
}

helpers.disabledSelectEmpresaProv = (codrol) => {
    if(codrol === 'CLI') return 'disabled'
}

helpers.disableAux = (codrol) => {
    if(codrol === 'AUX') return true
    else return false
}

helpers.articuloActivo = (activo) => {
    if(activo == 1) return 'far fa-eye-slash'
    else return 'far fa-eye'
}

helpers.activoText = (activo) => {
    if(activo == 1) return 'activo'
    else return 'inactivo'
}

helpers.activoBox = (activo) => {
    if (activo == 1)
        return 'badge badge-success'
    else
        return 'badge badge-secondary'
}

module.exports = helpers