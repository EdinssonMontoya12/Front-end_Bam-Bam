const helper = {}

helper.getDataUsuario = (usuario) => {
    
    const newUser = {
        user: usuario,
        rol: usuario.ROL === 'ADMIN' ? true : false
    }
    
    return newUser
}

module.exports = helper