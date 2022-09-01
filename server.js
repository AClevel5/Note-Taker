//Requiring Express
const express = require('express');

//Setting Port
const PORT = process.env.port || 3001;

//Create instance of express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Listen to requests on port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);