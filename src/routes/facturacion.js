const express = require('express');
const { route } = require('./dashboard');

const router = express.Router();

router.get('/insertar')
router.get('/actualizar')
router.get('/consultar')
router.get('/eliminar')

module.exports = router;   