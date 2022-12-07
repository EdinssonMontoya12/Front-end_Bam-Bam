const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use( 'local.login', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, user, password, done) => {

    const { nombre } = req.body;

    let url = 'http://95.138.193.223/usuario/' + nombre;
    if (rows.length > 0) {
        const user = rows[0];
        done(null, user, req.flash('success', 'Welcome ' + user.user));
    }
    else {
        return done(null, false, req.flash('message', 'Incorrect User or Password'));
    
    }
}));
    


