//Requiring Express
const express = require('express');
const path = require('path');
const applyRoutes = require('./routes');

//Setting Port
const PORT = process.env.port;

//Create instance of express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
applyRoutes(app);

// GET Route for landing page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Listen to requests on port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);