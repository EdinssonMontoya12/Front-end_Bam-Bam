const auth = {}

auth.cargar = (req, res) => {
    res.render('auth/login')
}

module.exports = auth