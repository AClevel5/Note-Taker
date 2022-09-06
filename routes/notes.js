//Require express and helper files
const express = require('express');
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const notes = express.Router();

//Get to retrieve exisiting notes
notes.get('/', (req, res) =>
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
);

//Post to add new notes
notes.post('/', (req, res) => {
    //Destructuring
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: "Sucess",
            body: newNote,
        };

        res.json(response);
    } else {
        res.json("Error in posting Note");
    }

});

module.exports = notes;
