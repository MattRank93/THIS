'use strict';


const mongoose = require('mongoose'),
   Appointment = mongoose.model('appointments'),
    AppointmentSlot = mongoose.model('appointmentslot'),
    User = mongoose.model('users');



// exports.read_all_appt=  async (req, res) => {
//     let object = {}
//     console.log(req.query)
//
//     object = req.query;
//
//     console.log(req.query)
//
//     const appointments = await Appointment.find(object).exec()
//         .then(appointments => res.json({appointments}))
//         .catch(err => console.log(err))
// };

exports.read_all_appt=  async (req, res) => {
    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const appointments = await AppointmentSlot.find(object).exec()
        .then(appointments => res.json({appointments}))
        .catch(err => console.log(err))
};


// exports.make_appt = async (req, res) => {
//
//     let object = {}
//     object = req.body
//     const apptointment = new Appointment(object);
//     await apptointment.save(object)
//         .then(res.sendStatus(200))
//         .catch(err => console.log(err))
//
// }

// exports.update_appt = async (req, res) => {
//
//     let object = {}
//     console.log(req.query)
//
//     object = req.query;
//
//     console.log(req.query)
//
//     const apptointment = await Appointment.findOneAndUpdate(object).exec()
//         .then(apptointment => res.json({apptointment}))
//         .catch(err => console.log(err))
//
// }
// exports.delete_appt = async (req, res) => {
//
//     let object = {}
//     console.log(req.query)
//
//     object = req.query;
//
//     console.log(req.query)
//
//     const apptointment = await Appointment.findOneAndDelete(object).exec()
//         .then(apptointment => res.json({apptointment}))
//         .catch(err => console.log(err))
//
// }

exports.make_appt_slot = async (req, res) => {

    let object = {}
    object = req.body
    const apptointment_slot = new AppointmentSlot(object);
    await apptointment_slot.save(object)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))


}

exports.update_appt_slot = async (req, res) => {

    let object = {}
    let filter = {}
    console.log(req.query)

    object = req.body;
    filter = req.query;

    console.log(req.query)

    const apptointment_slot = await AppointmentSlot.findOneAndUpdate(filter, object).exec()
        .then(apptointment_slot => res.json({apptointment_slot}))
        .catch(err => console.log(err))

}

exports.delete_appt_slot = async (req, res) => {

    let object = {}
    console.log(req.query)

    object = req.query;

    console.log(req.query)

    const apptointment_slot = await AppointmentSlot.findOneAndDelete(object).exec()
        .then(apptointment_slot => res.json({apptointment_slot}))
        .catch(err => console.log(err))

}
