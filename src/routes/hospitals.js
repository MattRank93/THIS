var express = require('express');
var router = express.Router();
var hospitals = require('../controller/HospitalController')
const {catchErrors} =  require('../middleware/error-handlers')
const { verifyJWT_MW } = require('../middleware/jwt');

/* GET users listing. */

router.get('/appointments', verifyJWT_MW , catchErrors(hospitals.read_by_errthing));
module.exports = router;
