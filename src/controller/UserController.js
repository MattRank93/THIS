'use strict';
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const mongoose = require('mongoose'),
    User = mongoose.model('users');


exports.register_user = async (req, res) => {

    let object = {}
    object = req.body
    const new_user = new User(object);
    new_user.setPassword(req.body.password)
    await new_user.save(object)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))

}


/**
 *
 * reads by every property of a user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.login=  async (req, res) => {

    let object = {}

    console.log(req.query)
    console.log(req.body)

   //const token = crypto.randomBytes(64).toString('hex')
    object = req.body
    //object.token = token
    console.log(req.body.password)
     if (req.body.email && req.body.password)
        object.email = req.body.email
        object.password = req.body.password
     if (req.body.phone_number && req.body.password)
        object.phone_number = req.body.phone_number
        object.password = req.body.password

    const user = await User.findOneAndUpdate({email: object.email}, object, {new: true},function(err, user) {


        if (user.validPassword(req.body.password)) {
           const accessToken = jwt.sign({user: user}, "9x7D]'QN|x8z4d_)EsRrSCIxPZD73GOliM2R=S1~i?OWNm{Up>7aA=cMsqCxxf/")
            res.header('auth-token', accessToken)
            res.send(user)
        } else { res.sendStatus(401)}
    });
};



/**
 *
 * reads by every property of a user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.update_user=  async (req, res) => {

    let object = {}

    console.log(req.query)
    console.log(req.body)

    //const token = crypto.randomBytes(64).toString('hex')
    object = req.body
    //object.token = token
    console.log(req.body.password)
    if (req.body.email && req.body.password)
        object.email = req.body.email
    object.password = req.body.password
    if (req.body.phone_number && req.body.password)
        object.phone_number = req.body.phone_number
    object.password = req.body.password

    const user = await User.findOneAndUpdate({email: object.email}, object, {new: true},function(err, user) {



        if (user.validPassword(req.body.password)) {
            user = req.body;
            // const accessToken = jwt.sign({user: user}, "9x7D]'QN|x8z4d_)EsRrSCIxPZD73GOliM2R=S1~i?OWNm{Up>7aA=cMsqCxxf/")
            // res.header('auth-token', accessToken)
            // res
            res.json(user)
        } else { res.sendStatus(401)}
    });
};
