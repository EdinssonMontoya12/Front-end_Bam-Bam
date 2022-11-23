const auth = {}

auth.cargar = (req, res) => {
    res.render('auth/login')
}

auth.isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('pase')
        return next()
    }
    res.redirect('/')
}

module.exports = auth