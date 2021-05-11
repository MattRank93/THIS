'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('node-uuid');


const AppointmentsSlotModel = new Schema(
    {
        "title": {
            "type": "String",
            required: "Please enter a title"
        },
        "startTime": {
            "type": "date",
            required: "Please enter a start time"
        },
        "endTime": {
            "type": "date",
            required: "Please enter a end time"
        },
        "__id": {
            "type": "String"
        },
        "__uuid": {
            "type": "String",
            default: uuid.v1
        },
        "emp_id": {
            "type": "String",
            required: "no uuid attached",
        },
        "Client_id": {
            "type": "String",
            default: 'free'
        }
    });

module.exports = mongoose.model('appointmentslot', AppointmentsSlotModel);
