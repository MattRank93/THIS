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
        "emp_uuid": {
            "type": "String",
            required: "no uuid attached",
        },
        "client_uuid": {
            "type": "String",
            default: 'free'
        }
    });

module.exports = mongoose.model('appointmentslot', AppointmentsSlotModel);
