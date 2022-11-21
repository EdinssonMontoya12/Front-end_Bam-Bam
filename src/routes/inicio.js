//Llamando a Express JS
const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const passport = require("passport");

//Ruta de la pagina inicial(Login del usuario)
router.get('/', (req, res) => {
    res.render('auth/login')
});

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
    failureFlash: true
}));

module.exports = router;