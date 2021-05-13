var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index.js');
const { verifyJWT_MW } = require("./src/middleware/jwt");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/thisdb');
const Appointments = require('./src/models/AppointmentsModel');
const AppointmentsSlot = require('./src/models/AppointmentsSlotsModel');
const User = require('./src/models/UsersModel');
const errorHandlers = require('./src/middleware/error-handlers.js');
const authHandlers = require('./src/middleware/auth.js');
const {config} = require('dotenv');


var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var adminRouter = require('./src/routes/admin');
 var employeeRouter = require('./src/routes/employees');
var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(cors())

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
//server.use(authHandlers);
server.use('/', indexRouter);
server.use('/', usersRouter);
server.use('/', adminRouter);
server.use('/', employeeRouter);

require('dotenv').config({ path: 'variables.env' });

//config();
// server.set('case sensitive routing', false);

server.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
server.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
server.use(errorHandlers.flashValidationErrors);

// production error handler
server.use(errorHandlers.productionErrors);

module.exports = server;


// TODO: set up email auth
