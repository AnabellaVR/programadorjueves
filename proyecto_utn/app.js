var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var proyectosRouter = require('./routes/proyectos'); //carpeta routes > proyecto.js

var tiendaRouter = require('./routes/tienda');

var almohadonesRouter = require('./routes/almohadones');

var novedadesRouter = require('./routes/novedades');

var serviciosRouter = require('./routes/servicios');

var disenioRouter = require('./routes/disenio');

var asesoramientoRouter = require('./routes/asesoramiento');

var catalogodetelasRouter = require('./routes/catalogodetelas');

var estudioRouter = require('./routes/estudio');

var quienessomosRouter = require('./routes/quienessomos');

var equipoRouter = require('./routes/equipo');

var contactoRouter = require('./routes/contacto');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/proyectos' , proyectosRouter);

app.use('/tienda' , tiendaRouter);

app.use('/almohadones' , almohadonesRouter);

app.use('/novedades' , novedadesRouter);

app.use('/servicios' , serviciosRouter);

app.use('/disenio' , disenioRouter);

app.use('/asesoramiento' , asesoramientoRouter);

app.use('/catalogodetelas' , catalogodetelasRouter);

app.use('/estudio' , estudioRouter);

app.use('/quienessomos' , quienessomosRouter);

app.use('/equipo' , equipoRouter);
  
app.use('/contacto' , contactoRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
