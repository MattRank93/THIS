var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const employees = require('../controller/EmployeeController')
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW_employee} = require("../middleware/jwt");



/* GET users listing. */


// router.post('/register_emp', catchErrors(employees.register));

router.patch('/login_emp', catchErrors(employees.login))

router.patch('/update_emp', verifyJWT_MW_employee , catchErrors(employees.update))

router.post('/add_appt_slot', verifyJWT_MW_employee , catchErrors(appointment.make_appt_slot))

router.post('/add_appt_slot', verifyJWT_MW_employee , catchErrors(appointment.update_appt_slot))

router.post('/add_appt_slot', verifyJWT_MW_employee , catchErrors(appointment.delete_appt_slot))


module.exports = router;


