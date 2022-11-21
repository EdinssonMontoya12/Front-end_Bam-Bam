const fetch = require('node-fetch')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
}, async (name, password, done) => {

    var valida = await fetch(`http://localhost:3000/usuario/signin/${name}/${password}`)
    valida = await valida.json()

    console.log(valida)

    if (valida.OSUCCESS === 1) {
        return done(null, valida.DATA)
    } else {
        return done(null, false, { message: valida.OMENSAJE })
    }
}))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})