var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const admin = require('../controller/AdminController')
const hospital = require("../controller/HospitalController");
const { verifyJWT_MW_admin } = require('../middleware/jwt');



// TODO: make client patch method and switch back to patch
router.patch('/elevate', verifyJWT_MW_admin ,   catchErrors(admin.elevate_status));

// TODO: make client patch method and switch back to patch
router.patch('/lower', verifyJWT_MW_admin ,  catchErrors(admin.lower_status));


router.post('/add-hospital', verifyJWT_MW_admin , catchErrors(hospital.add_hospital))


module.exports = router;

