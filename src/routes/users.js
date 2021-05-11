var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW} = require("../middleware/jwt");



/* GET users listing. */


router.post('/register', catchErrors(users.register_user));

router.patch('/login', catchErrors(users.login));

router.patch('/update_user', verifyJWT_MW , catchErrors(users.update_user))

router.get('/appointments_slots', verifyJWT_MW , catchErrors(appointment.read_all_appt_slot));

// router.post('/add_appt', verifyJWT_MW , catchErrors(appointment.make_appt))

router.patch('/update_appt', verifyJWT_MW , catchErrors(appointment.update_appt_slot))

// router.post('/delete_appt', verifyJWT_MW , catchErrors(appointment.delete_appt))


module.exports = router;


