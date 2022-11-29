const helper = {}

helper.getDataUsuario = (usuario, data) => {
    
    const newUser = {
        user: usuario,
        rol: usuario.ROL === 'ADMIN' ? true : false,
        data: data
    }
    
    return newUser
}

module.exports = helper