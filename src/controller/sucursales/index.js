const fetch = require('node-fetch');
const helpers = require('../../lib/helpers');
const sucursalDao = require('../../Dao/sucursalDao')

const sucursales = {}

sucursales.consultar = async(req, res) => {
    
    const response = await sucursalDao.consultar('**')

    res.render('sucursales/verSucursales', helpers.getDataUsuario(res.locals.user, response.DATA))

}

sucursales.insertar = (req, res) => {
    res.render('sucursales/insertarSucursal', helpers.getDataUsuario(res.locals.user))
}

sucursales.insertardao = async (req, res) => {

    const response = await sucursalDao.insertar(req.body)

    if(response.OSUCCESS === 1){
        res.redirect('/sucursal')
    }else{
        req.flash('err', response.OMENSAJE)
        res.redirect('/sucursal/insertar')
    }
}

module.exports = sucursales
