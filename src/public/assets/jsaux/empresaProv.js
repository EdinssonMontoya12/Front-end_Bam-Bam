function eliminarEmpresaProv(terceroid, nombre) {
    Swal.fire({
      title: `Quieres eliminar la empresa ${nombre}?`,
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const algo = window.location = `/empresaProve/eliminar/${terceroid}`
        console.log('Esto es una prueba ' + algo)
        Swal.fire('Eliminado', '', 'success')
      }
    })
  }