const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const inventario = {}

inventario.consultar = (req, res) => {
    res.render('inventario/producto/verProductos', helpers.getDataUsuario(res.locals.user))
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