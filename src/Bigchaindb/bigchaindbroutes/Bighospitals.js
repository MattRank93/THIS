var express = require('express');
var router = express.Router();
var bighospitals = require('../bigchaincontroller/BigHospitalController.js')
var bighospitalsCRAB = require('src/Bigchaindb/services/CRABtest.js')
const {catchErrors} =  require('../../middleware/error-handlers')
const { verifyJWT_MW } = require('../../middleware/jwt');
const driver = require('bigchaindb-driver')
const API_PATH = 'http://192.168.0.106:9984/api/v1/'

/* GET users listing. */

router.get('/bighospitals', bighospitals.read_by_errthing);

router.get('/bighospitals_id', bighospitals.read_by_id);

router.get('/bighospitals_id_orm', bighospitalsCRAB.read_by_id_orm);

router.post('/bighospitals', bighospitals.add_hospital);


module.exports = router;
