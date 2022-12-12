const express = require('express')
const login = require('../lib/authentication')
const dashboard = require('./dashboard')
const facturacion = require('./facturacion')
const auth = require('./login')
const inventario = require('./inventario')
const reportes = require('./reportes')
const terceros = require('./terceros')
const empresaProve = require('./empresaProve')
const usuario = require('./usuarios')
const sucursales = require('./sucursales')
const lote = require('./lote')
const grupoproducto = require('./grupoproducto')
const facturaCompra = require('./facturaCompra')

const router = express.Router();

router.use('/dashboard', login.isLoggedIn, dashboard);
router.use('/factura', login.isLoggedIn, facturacion);
router.use('/inventario', login.isLoggedIn, inventario);
router.use('/reportes', login.isLoggedIn, reportes);
router.use('/tercero', login.isLoggedIn, terceros);
router.use('/auth', auth);
router.use('/empresaProve', login.isLoggedIn, empresaProve);
router.use('/usuario', login.isLoggedIn, usuario);
router.use('/sucursal', login.isLoggedIn, sucursales);
router.use('/lote', login.isLoggedIn, lote);
router.use('/grupoproducto', login.isLoggedIn, grupoproducto);
router.use('/facturacompra', login.isLoggedIn, facturaCompra);

router.get('/', (req, res) => {
    res.redirect('/auth/')
})

router.get('/404', (req, res) => {
    res.render('layouts/404')
})

module.exports = router