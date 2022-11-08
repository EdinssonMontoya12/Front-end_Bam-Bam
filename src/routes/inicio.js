//Llamando a Express JS

const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../lib/authentication");
const authController = require('../controller/auth/loginController')


//Ruta de la pagina inicial(Login del usuario)
router.get('/', (req, res) => {
    res.render('auth/login')
});


router.post('/signin', authController.validaUsuario);

module.exports = router;

