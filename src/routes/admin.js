var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const admin = require('../controller/AdminController')
const appointment = require("../controller/AppointmentsController");
const employees = require("../controller/EmployeeController");
const { verifyJWT_MW_admin } = require('../middleware/jwt');



// TODO: make client patch method and switch back to patch
router.patch('/elevate', verifyJWT_MW_admin ,   catchErrors(admin.elevate_status));

// TODO: make client patch method and switch back to patch
router.patch('/lower', verifyJWT_MW_admin ,  catchErrors(admin.lower_status));

router.post('/register_emp', verifyJWT_MW_admin , catchErrors(employees.register));

router.post('/register_emp', verifyJWT_MW_admin , catchErrors(employees.register));


module.exports = router;

