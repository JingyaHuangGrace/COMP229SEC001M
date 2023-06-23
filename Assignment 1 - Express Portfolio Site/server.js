
//server.js-Jingya Huang 301221651 June 7, 2023
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

app.post('/submit', (req, res, next) => {
    // Perform any necessary tasks for form submission
    // ...
  
    // Send a message
    res.send('Form submitted successfully!');
  
    // Call next to pass control to the next middleware
    next();
  }, (req, res) => {
    // This is the next middleware function
    // It will be executed after the previous middleware completes
    // Redirect the user to the home page
    res.redirect('/');
  });


app.listen(3008);
module.exports = app;

console.log('Server running at http://localhost:3008/');