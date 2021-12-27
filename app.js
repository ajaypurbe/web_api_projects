
const { appendFile } = require('fs');
const mongoos = require('mongoose');


const express =require('express');

const app= express();

require("./database/Dbconnection");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const customerRoute = require("./routes/customerRoute");
const doctorRoute = require('./routes/doctorRoute');
app.use(customerRoute);
app.use(doctorRoute);

app.listen(400, () => {
    console.log('server listening ata port 400');
});



