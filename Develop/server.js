
//import dependencies
const express = require('express');
const path = require('path');

//port
const PORT = process.env.PORT || 3001;

//add database to store notes
const dbData = require('./db/db.json');

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//have server use router
app.use('/', htmlRoutes);
app.use('/api', apiRoutes)

//use express middleware static to allow static assets
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

