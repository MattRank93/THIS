'use strict';

const crypto = require('crypto')
const mongoose = require('mongoose'),
    User = mongoose.model('users');





/**
 *
 * reads by every property of a user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.elevate_status =  async (req, res) => {

    let object = {}
    object = req.body

    const user = await User.findOneAndUpdate({ email: object.email}, object, {new: true},function(err, user) {
        //console.log(user.role)
        user.role = "admin"
        user.save();
        res.json(user)

    });

};

/**
 *
 * reads by every property of a user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.lower_status =  async (req, res) => {

    let object = {}
    object = req.body

    const user = await User.findOneAndUpdate({ email: object.email}, object, {new: true},function(err, user) {

        //console.log(user.role)
            user.role = "user"
            user.save();
            res.json(user)

    });

};
