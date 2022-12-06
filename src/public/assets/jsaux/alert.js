const mostrarAlertSuccess = (mensaje) => {
    Swal.fire({
        title: `${mensaje}`,
        confirmButtonText: 'Aceptar',
    })
}

const mostrarAlertError = (mensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${mensaje}`
      })
}

document.getElementById('llamado').click()

