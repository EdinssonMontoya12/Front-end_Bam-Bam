const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Inicializacion de Express
const app = express();
require('./controller/auth/loginController')
require('dotenv/config')

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'), 
    partialsDir: path.join(__dirname, 'views', 'partials'), 
    extname: '.hbs', 
    helpers: require('./lib/handlebars') 
}));

app.set('view engine', 'hbs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(passport.initialize()); 
app.use(passport.session()); 

//Variables Globales
app.use( (req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//Rutas del servidor
app.use(require('./routes/index')); 

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})

