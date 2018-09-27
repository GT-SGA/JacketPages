const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Cors Middleware
app.use(cors());

////////////////////////////////////////////////////////////////////////////////  SERVER & DB SETUP

// Connect to the MySQL database
var connection = mysql.createConnection({
    host        :   "localhost",
    user        :   "root",
    password    :   "password"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// Use the database jacketpages_dev
connection.query("USE jpdev");

var server = app.listen(process.env.PORT || 8081);   //server listening to localhost 8081

const io = require('socket.io').listen(server);

app.use(express.static("public"));  //automatically serves static files home.html and its css files

console.log("Running on port 8081");

//Load Routes
const users = require("./routes/users");
const bills = require("./routes/bills");
const index = require("./routes/index");


//Use Routes
app.use('/users', users);
app.use('/bill', bills);
app.use('/', index)


