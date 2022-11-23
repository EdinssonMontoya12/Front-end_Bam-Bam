const express = require('express');
const { isLogged } = require('../controller/auth/auth.js')
const dashboard = require('../controller/dashboard')

const router = express.Router();

//Ruta del dashboard
router.get('/', dashboard.cargar);

module.exports = router;