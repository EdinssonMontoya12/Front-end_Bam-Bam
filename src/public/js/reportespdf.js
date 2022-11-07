/* const cargarinfo = async () => {
    const respuesta = await fetch('http://localhost:3000/sucursal/3');

    console.log(respuesta);
}
    cargarinfo(); */

 fetch('http://localhost:3000/articulo/1/**')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        
        console.log(respuesta.codigo);
    })































   


