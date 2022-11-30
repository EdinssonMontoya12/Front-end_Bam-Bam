var countTable = 0
const send = {
    data: []
}
const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
});

function insertarProducto() {
    const producto = document.getElementById('seleccionProducto').value
    const unidades = document.getElementById('numeroUnidades').value
    const valorUnit = document.getElementById('valorVenta').value
    const lote = document.getElementById('seleccionLote').value

    const trProducto = document.createElement('tr')    
    trProducto.id = countTable

    const tdCodigo = document.createElement('td')
    const tdProducto = document.createElement('td')
    const tdUnidades = document.createElement('td')
    const tdValorunit = document.createElement('td')
    const tdValorTotal = document.createElement('td')
    const tdAcciones = document.createElement('td')

    tdCodigo.append("VAL")
    tdProducto.append(producto)
    tdUnidades.append(unidades)
    tdValorunit.append(valorUnit)
    tdValorTotal.append(unidades*valorUnit)
    tdValorTotal.id = `totalProducto${countTable}`
    tdAcciones.innerHTML = `<a onclick="eliminarProducto(${countTable})" class="btn btn-danger"><i >X</i></a>`

    tdCodigo.classList = "text-center"
    tdProducto.classList = "text-center"
    tdUnidades.classList = "text-center"
    tdValorunit.classList = "text-center"
    tdValorTotal.classList = "text-center"
    tdAcciones.classList = "text-center"

    trProducto.append(tdCodigo)
    trProducto.append(tdProducto)
    trProducto.append(tdUnidades)
    trProducto.append(tdValorunit)
    trProducto.append(tdValorTotal)
    trProducto.append(tdAcciones)

    const tbody = document.getElementById('tablaProductos')
    tbody.append(trProducto)

    const totalFactura = document.getElementById('valorTotalFactura').value
    document.getElementById('valorTotalFactura').value = (parseInt(totalFactura) + (unidades * valorUnit))

    countTable++
}

function eliminarProducto(id) {
    const tr = document.getElementById(`${id}`)
    const tbody = document.getElementById('tablaProductos')

    var contadorAux = id

    console.log(`totalProducto${contadorAux}`)

    const totalRestar = document.getElementById(`totalProducto${contadorAux}`).textContent
    const totalFactura = document.getElementById('valorTotalFactura').value
    document.getElementById('valorTotalFactura').value = (parseInt(totalFactura) - parseInt(totalRestar))

    while(contadorAux < countTable) {
        const trAux = document.getElementById(`${contadorAux+1}`)
        if(trAux !== null){
            trAux.lastChild.innerHTML = `<a onclick="eliminarProducto(${contadorAux})" class="btn btn-danger"><i >X</i></a>`
            document.getElementById(`totalProducto${contadorAux+1}`).id = `totalProducto${contadorAux}`
            trAux.id = contadorAux            
            contadorAux++
        }else{
            break
        }
    }

    countTable--

    tbody.removeChild(tr)
}