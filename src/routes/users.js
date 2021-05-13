var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')
const appointment = require("../controller/AppointmentsController");
const {verifyJWT_MW} = require("../middleware/jwt");



/* GET users listing. */


router.post('/register', catchErrors(users.register_user));

router.patch('/login', catchErrors(users.login));

router.delete('/delete', catchErrors(users.delete_user));

router.patch('/update_user', catchErrors(users.update_user))


module.exports = router;


