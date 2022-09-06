const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

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

module.exports = { readFromFile, deleteFromFile, readAndAppend };