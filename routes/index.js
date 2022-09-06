//Require Notes route
const notes = require('./notes');

function applyRoutes(app) {
    app.use('/api/notes', notes);
};

//export app
module.exports = applyRoutes;



