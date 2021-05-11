var express = require('express');
var router = express.Router();
var appointments = require('../controller/AppointmentsController')
const {catchErrors} =  require('../middleware/error-handlers')
const { verifyJWT_MW } = require('../middleware/jwt');

/* GET users listing. */

router.get('/appointments', verifyJWT_MW , catchErrors(appointments.read_all_available));

router.post('/appointments', verifyJWT_MW , catchErrors(appointments.make_appt));

router.post('/appointments', verifyJWT_MW , catchErrors(appointments.update_appt));

router.delete('/appointments', verifyJWT_MW , catchErrors(appointments.delete_appt));

module.exports = router;
