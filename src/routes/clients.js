var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW} = require("../middleware/jwt");



/* GET users listing. */




router.get('/appointments_slots', verifyJWT_MW , catchErrors(appointment.read_all_appt));


router.patch('/update_appt', verifyJWT_MW , catchErrors(appointment.update_appt_slot))



module.exports = router;


