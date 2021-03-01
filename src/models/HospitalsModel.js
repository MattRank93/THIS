'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HospitalsModel = new Schema(
    {
        "provider_id": {
            "type": "String"
        },
        "hospital_name": {
            "type": "String"
        },
        "address": {
            "type": "String"
        },
        "city": {
            "type": "String"
        },
        "state": {
            "type": "String"
        },
        "zip_code": {
            "type": "String"
        },
        "county_name": {
            "type": "String"
        },
        "phone_number": {
            "_phone_number": {
                "type": "String"
            }
        },
        "hospital_type": {
            "type": "String"
        },
        "hospital_ownership": {
            "type": "String"
        },
        "emergency_services": {
            "type": "String"
        },
        "location": {
            "_human_address": {
                "type": "String"
            },
            "_latitude": {
                "type": "String"
            },
            "_longitude": {
                "type": "String"
            },
            "_needs_recoding": {
                "type": "String"
            }
        },
        "__id": {
            "type": "String"
        },
        "__uuid": {
            "type": "String"
        },
        "__position": {
            "type": "String"
        },
        "__address": {
            "type": "String"
        }
    });

module.exports = mongoose.model('hospitals', HospitalsModel);