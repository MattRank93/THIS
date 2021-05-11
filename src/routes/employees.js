var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const employees = require('../controller/EmployeeController')



/* GET users listing. */


router.post('/register_emp', catchErrors(employees.register));

router.patch('/login_emp', catchErrors(employees.login));

router.patch('/update_emp', catchErrors(employees.update));


module.exports = router;


