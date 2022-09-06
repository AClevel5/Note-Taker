const express = require('express');
const uuid = require('../helpers/uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const notes = express.Router();

notes.get('/', (req, res) =>
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
);