//Require express and notes route
const express = require('express');
const notes = require('./notes');

//Create and instance of express.
const app = express();

//use notes
app.use('/notes', notes);

//export app
module.export = app;



