const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');

const dashboard = {}

dashboard.cargar = (req, res) => {

    res.render('dashboard/dashboard', helpers.getDataUsuario(res.locals.user))
}

module.exports = dashboard