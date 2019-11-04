//jshint esversion: 6
 
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const request = require('request');

// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8280;
const server = app.listen(port, listening);

function listening(){
    console.log('Server is running');
    console.log(`Running on localhost: ${port}`);
    
};


// const fakelocation = {
//     zip : '94040,uk',
//     temp: 50,
//     content: 'London is very cold'
// }
// app.get('/fakeDataLocation', getFakeData)
// function getFakeData(req, res){
//     res.send(fakelocation)
// }

const locationData = [];
app.get('/all', getData)
function getData(req, res){
    res.send(locationData)
}

//POST route

app.post('/add', function(req, res){   
    // console.log(req.body)
    
    newEntry={
        // date: req.body.date,
        zip: req.body.zip,
        temp: req.main.temp,
        feeling: req.body.feeling
    }
    locationData.push(newEntry)
    res.send(locationData)
    console.log(locationData);
}
 );
   
