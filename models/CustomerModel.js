const mongoose = require("mongoose");

const Customer = mongoose.model("customer", {
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
    password: {
        type: String,
    },
    phonenumber: {
        type: String,
    },

});

module.exports = Customer;