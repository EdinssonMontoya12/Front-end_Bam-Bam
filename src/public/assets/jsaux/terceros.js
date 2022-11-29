function eliminarTercero(terceroid, nombre) {
  Swal.fire({
    title: `Quieres eliminar a ${nombre}?`,
    showDenyButton: true,
    confirmButtonText: 'Aceptar',
    denyButtonText: `Cancelar`,
  }).then(async (result) => {
    if (result.isConfirmed) {
      const algo = window.location = `/tercero/eliminar/${terceroid}`
      console.log('Esto es una prueba ' + algo)
      Swal.fire('Eliminado', '', 'success')
    }
  })
}