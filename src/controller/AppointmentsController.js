'use strict';


const mongoose = require('mongoose'),
   Hospital = mongoose.model('appointments'),
    User = mongoose.model('users');



exports.read_all_available=  async (req, res) => {
    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.find(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))
};


exports.make_appt = async (req, res) => {

    let object = {}
    object = req.body
    const new_hospital = new Hospital(object);
    await new_hospital.save(object)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))

}

exports.update_appt = async (req, res) => {

    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.findOneAndUpdate(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))

}
exports.delete_appt = async (req, res) => {

    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.findOneAndDelete(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))

}

exports.make_appt_slot = async (req, res) => {

    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.findOneAndUpdate(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))

}

exports.update_appt_slot = async (req, res) => {

    let object = {}
    object = req.body
    const new_hospital = new Hospital(object);
    await new_hospital.save(object)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))

}


exports.delete_appt_slot = async (req, res) => {

    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const hospital = await Hospital.findOneAndDelete(object).exec()
        .then(hospital => res.json({hospital}))
        .catch(err => console.log(err))

}
