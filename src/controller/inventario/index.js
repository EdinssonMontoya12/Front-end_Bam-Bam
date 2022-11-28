const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const inventario = {}

inventario.consultar = (req, res) => {
    res.render('inventario/verProductos', helpers.getDataUsuario(res.locals.user))
}

inventario.insertar = (req, res) => {
    res.render('inventario/insertarProducto', helpers.getDataUsuario(res.locals.user))
}
inventario.actualizar = (req, res) => {
    res.render('inventario/actualizarProducto', helpers.getDataUsuario(res.locals.user))
}
inventario.eliminar = (req, res) => {
    res.render('inventario/eliminarProducto', helpers.getDataUsuario(res.locals.user))
}
inventario.verlote = (req, res) => {
    res.render('inventario/verlote', helpers.getDataUsuario(res.locals.user))
}
inventario.creargruppro = (req, res) => {
    res.render('inventario/creargrupoproducto', helpers.getDataUsuario(res.locals.user))
}
inventario.vergruppro = (req, res) => {
    res.render('inventario/vergrupoproducto', helpers.getDataUsuario(res.locals.user))
}
inventario.crearlote = (req, res) => {
    res.render('inventario/crearlote', helpers.getDataUsuario(res.locals.user))
}

module.exports = inventario
