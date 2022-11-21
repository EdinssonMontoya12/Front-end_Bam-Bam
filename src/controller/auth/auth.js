const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('pase')
        return next()
    }
    res.redirect('/')
}

module.exports = { isLogged }