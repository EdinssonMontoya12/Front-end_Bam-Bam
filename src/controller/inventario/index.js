const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const inventario = {}

inventario.consultar = async (req, res) => {
    var inventario = await fetch(`${process.env.HOST_BACKEND}/articulo/${res.locals.user.sucid}/**`)
    
    inventario = await inventario.json()
    

    res.render('inventario/producto/verProductos', helpers.getDataUsuario(res.locals.user, inventario.DATA))
}
inventario.insertar = (req, res) => {
    res.render('inventario/producto/insertarProducto', helpers.getDataUsuario(res.locals.user))
}
inventario.actualizar = (req, res) => {
    res.render('inventario/producto/actualizarProducto', helpers.getDataUsuario(res.locals.user))
}
inventario.eliminar = (req, res) => {
    res.render('inventario/producto/eliminarProducto', helpers.getDataUsuario(res.locals.user))
}




module.exports = inventario