//Llamando a Express JS
const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const passport = require("passport");
const auth = require('../controller/auth/auth')
const login = require('../lib/authentication')

//Ruta de la pagina inicial(Login del usuario)
router.get('/', login.isNotLoggedIn, auth.cargar);

router.post('/signin', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/dashboard',
}));

router.get('/logout', (req, res) => {
    req.logOut( err => {
        res.redirect('/')
    } )
})

module.exports = router;