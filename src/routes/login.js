//Llamando a Express JS
const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const passport = require("passport");
const auth = require('../controller/auth/auth')

//Ruta de la pagina inicial(Login del usuario)
router.get('/', auth.cargar);

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
}));

module.exports = router;