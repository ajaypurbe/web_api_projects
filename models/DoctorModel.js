const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const doctors = mongoose.model("doctor",{
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    phonenumber : {
        type : String,
    },
    workexperience : {
        type : String,
    },
    education:{
        type : String,
    },
    gender: {
        type: String,
    },
    specialites: {
        type : String,
    },
    traning : {
        type: String,
    },
    opd_time : {
        type : String,
    },
    working_hospital : {
        type : String,
    }
});

module.exports = doctors;

