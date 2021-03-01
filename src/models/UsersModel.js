'use strict';
const mongoose = require('mongoose');
const uuid = require('node-uuid');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const Schema = mongoose.Schema;


const UsersModel = new Schema(
    {
        "firstname": {
            "type": "String",
            required: "Please enter a first name"
        },
        "lastname": {
            "type": "String",
            "required": "Please enter a last name"
        },
        "email": {
            "type": "String",
            "required": "Please enter an email",
            unique : 1
        },
        "phone_number": {
            "type": "String",
            "required": "Please enter an phone number",
            unique : 1
        },
        "role": {
                "type": "String",
                default: 'user'
        },
        "date_created": {
            "type": "date",
            default: Date.now
        },
        "UUID": {
            "type": "String",
            default: uuid.v1
        },
        "token": {
            "type": "String"
        },
        "hash": "string",
        "salt": "string"
    });



UsersModel.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync( password, this.salt, 1000,
      64, 'sha512').toString('hex')
};



UsersModel.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

UsersModel.methods.isAuthorized = function(token) {
    return this.token === token;
}




module.exports = mongoose.model('users', UsersModel);