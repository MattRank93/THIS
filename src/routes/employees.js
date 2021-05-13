const users = require('../controller/UserController')
var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
// const employees = require('../controller/EmployeeController')
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW_employee} = require("../middleware/jwt");



/* GET users listing. */


// router.post('/register_emp', catchErrors(employees.register));

// router.patch('/login_emp', catchErrors(users.login))

router.patch('/update_emp', verifyJWT_MW_employee , catchErrors(users.update_user))

router.get('/appointments', verifyJWT_MW_employee , catchErrors(appointment.read_all_appt));

router.post('/appointments', verifyJWT_MW_employee , catchErrors(appointment.make_appt_slot))

router.patch('/appointments', verifyJWT_MW_employee , catchErrors(appointment.update_appt_slot))

router.delete('/appointments', verifyJWT_MW_employee , catchErrors(appointment.delete_appt_slot))


module.exports = router;


