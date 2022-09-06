const fs = require('fs');
const util = require('util');

//Read
const readFromFile = util.promisify(fs.readFile);

//Write
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

//Read then append
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

//Read then delete
const deleteFromFile = (destination, id) =>
    fs.readFile(destination, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let parsedData = JSON.parse(data);
            parsedData = parsedData.filter(e => e.id !== id);
            writeToFile(destination, parsedData);
        }
    })

//Export the functions
module.exports = { readFromFile, deleteFromFile, readAndAppend };