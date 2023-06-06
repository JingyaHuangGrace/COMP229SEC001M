var express = require('express');
var app = express();
app.use('/',function(req,res){
    res.send('HELLO WORLD');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.children.exports = app;