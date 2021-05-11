'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AppointmentsModel = new Schema(
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
        "location": {
            "type": "String"
        },
        "__id": {
            "type": "String"
        },
        "__uuid": {
            "type": "String",
            default: uuid.v1
        },
        "emp_UUID": {
            "type": "String",
            required: "no uuid attached",
            unique : 1
        },
        "Client-Apt_UUID": {
            "type": "String"
        }
    });

module.exports = mongoose.model('appointments', AppointmentsModel);
