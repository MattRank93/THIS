var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const employees = require("../controller/EmployeeController");
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW} = require("../middleware/jwt");



/* GET users listing. */


router.post('/register', catchErrors(users.register_user));

router.patch('/login', catchErrors(users.login));

router.patch('/update', catchErrors(users.update_user));

router.patch('/login_emp', catchErrors(employees.login))

router.patch('/update_emp', verifyJWT_MW , catchErrors(employees.update))

router.post('/add_appt', verifyJWT_MW , catchErrors(appointment.make_appt))

router.post('/add_appt', verifyJWT_MW , catchErrors(appointment.update_appt))

router.post('/add_appt', verifyJWT_MW , catchErrors(appointment.delete_appt))


module.exports = router;


