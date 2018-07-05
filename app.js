var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql')


var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/organizations.html'));
});

app.listen(8080);
