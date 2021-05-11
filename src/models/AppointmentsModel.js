'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('node-uuid');


const AppointmentsModel = new Schema(
    {
        "title": {
            "type": "String"
        },
        "startTime": {
            "type": "date"
        },
        "endTime": {
            "type": "date"
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
        "user_UUID": {
            "type": "String"
        }
    });

module.exports = mongoose.model('appointments', AppointmentsModel);
