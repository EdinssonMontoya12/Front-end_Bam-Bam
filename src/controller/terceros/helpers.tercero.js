const Swal = require('sweetalert2')
const fetch = require('node-fetch')

const helperTercero = {}

helperTercero.eliminarTerceroConfirm = (req, res, next) => {

    Swal.fire({
        title: `Quieres eliminar a ${req.params.nombre}?`,
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
    })

}

module.exports = helperTercero