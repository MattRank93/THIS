'use strict';


const mongoose = require('mongoose'),
   Hospital = mongoose.model('hospitals'),
    User = mongoose.model('users');



exports.read_by_errthing=  async (req, res) => {
    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.find(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))
};


exports.add_hospital = async (req, res) => {

    let object = {}
    object = req.body
    const new_hospital = new Hospital(object);
    await new_hospital.save(object)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))

}