const jwt = require("jsonwebtoken");

const Customer = require("../models/CustomerModel");

module.exports.verifyCustomer = function (req, res, next) {
    try{
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "mysecretkey");
    //console.log(data.customerId);
    Customer.findOne({ _id: data.customerId }).then(function (result){ 
        // save the customer information 
        req.customerInfo = result;
        next();
    })
    .catch({msg : "Invalid token"})
}
catch(e){
    res.send({msg : "Invalid token"})
}
}