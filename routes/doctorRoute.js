const express = require("express");
const doctor = require("../models/DoctorModel");
const router = new express.Router();
const auth = require("../auth/auth");

router.post("/doctor/insert", auth.verifyCustomer, function(req, res){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phonenumber = req.body.phonenumber;
    const workexperience = req.body.workexperience;
    const education = req.body.education;

    console.log(req.body)

    const doctorData = new doctor({
        firstname : firstname,
        lastname : lastname,
        phonenumber: phonenumber,
        workexperience: workexperience,
        education: education,
    })

    doctorData.save().then(doctor => {
        res.json({
            status :true,
            result : doctor,
        })
    }).catch(err => {
        res.json({
            err: err,
        })
    });
})

module.exports= router;