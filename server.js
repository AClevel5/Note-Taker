const express = require('express');

const PORT = process.env.port || 3001;

//create instance of express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);