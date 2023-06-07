process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

app.listen(3001);
module.exports = app;

console.log('Server running at http://localhost:3001/');

app.post('/submit', (req, res) => {
  
    // Redirect to the Home Page after a short delay
    setTimeout(() => {
      res.redirect('/');
    }, 3000); // Adjust the delay (in milliseconds) as needed
  });
  
  app.get('/', (req, res) => {
    const message = "Message Sent!"; 
    res.render('/submit', { message });
  });
  
  // Start the server
  app.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
  });