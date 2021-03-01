var express = require('express');
var router = express.Router();
const {catchErrors} =  require('../middleware/error-handlers')
const users = require('../controller/UserController')



/* GET users listing. */


router.post('/register', catchErrors(users.register_user));

router.patch('/login', catchErrors(users.login));

router.patch('/update', catchErrors(users.update_user));


module.exports = router;


