var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql')
const bodyParser = require('body-parser')


var connection = mysql.createConnection({
  host     : 'locahost',
  user     : 'root',
  password : 'password',
  database : 'jpdev'
});

connection.connect();

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/organizations.html'));
});

connection.query('SELECT * from users', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080')
})
