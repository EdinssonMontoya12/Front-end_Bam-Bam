const fetch = require('node-fetch')

const validaUsuario = async (req, res) => {

    var valida = await fetch(`http://localhost:3000/usuario/signin/${req.body.user}/${req.body.password}`)
    valida = await valida.json()

    if (valida.OSUCCESS === 1) {
        return res.redirect('/dashboard')
    } else {
        req.flash('message', valida.OMENSAJE)
        return res.redirect('/')
    }
}

module.exports = { validaUsuario }