const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path'); 
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

//Inicializacion de Express
const app = express();
const swal = require('sweetalert');
require('./controller/auth/loginController.js')
//Configuracion del Servidor

//Puerto del servidor
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
//Motor de vistas Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //<-- Indica la ubicacion de la carpeta Vistas
    partialsDir: path.join(app.get('views'), 'partials'), //<-- Indica la ubicacion de partials 
    extname: '.hbs', //<-- Indica la extension de la vista (Handlebars.hbs)
    helpers: require('./lib/handlebars')  //<-- Indica la extension de la vista (Handlebars.hbs)
}));

app.set('view engine', 'hbs'); //Asignacion del motor de vista de Handlebars


//Middlewares (Envio, Recepcion de peticiones de servidor)
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(morgan('dev')); //<-- Comando por consola
app.use(express.urlencoded({ extended: false })); //<-- algo de validacion de formularios :v
app.use(express.json()); //<-- Modulo de gestion de JSON de Express
app.use(passport.initialize()); //<-- Inicializacion de Passport
app.use(passport.session()); //<-- Inicializacion de Passport
app.use(flash());

//Variables Globales
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.message = req.flash('message');
    res.locals.user = req.user || null;
    next();
});

//Rutas del servidor

app.use(require('./routes/index'));  //<-- rutas del dashboard

//Carpeta Public (Carpeta donde se almacena hoja de estilos, javascript y contenido multimedia del proyecto)
app.use(express.static(path.join(__dirname, 'public')));

//Encender el servidor -- Inicia el servidor y muestra un mensaje en consola
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})

