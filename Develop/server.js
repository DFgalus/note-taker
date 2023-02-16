
//import dependencies
const express = require('express');
const app = express();
//port
const PORT = process.env.PORT || 3001;

//import routes
const htmlRoutes = require('../Develop/routes/htmlRoutes');
// const apiRoutes;



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//have server use router
app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

//use express middleware static to allow static assets
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

