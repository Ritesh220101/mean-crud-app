const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const route = require('./routes/route');
var path = require('path');

var app = express();

// connection to nomgodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on("connected",()=>{
    console.log("Connected to db mongodb @ 27017");
});

// mongoose.connection.on("error",(err)=>{
//     if(err){
//         console.log("Error in db connection"+err);
//     }
//     console.log("Connected to db mongodb @ 27017");
// });



// adding middleware
app.use(cors());

app.use(bodyparser.json());

//static files
// app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("Sample Application");
})


app.listen(2000);