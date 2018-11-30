const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const CASAuthentication = require('cas-authentication-gt');
const Redis = require('./redis');

const redis = new Redis();

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cors Middleware
app.use(cors());

// Express Session
app.use(session({
  secret: 'jpsessionkey',
  resave: false,
  saveUninitialized: true,
}));

const cas = new CASAuthentication({
  cas_url: 'https://login.gatech.edu/cas/login',
  service_url: 'https://jacketpages.sga.gatech.edu',
});

/* SERVER & DB SETUP */

// Connect to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Use the database jacketpages_dev
connection.query('USE jpdev');

const port = (process.env.port || 80);
const server = app.listen(port);

const io = require('socket.io').listen(server);

app.use(express.static('public')); // automatically serves static files home.html and its css files

console.log('Running on port ' + port);

// Load Routes
const users = require('./routes/users');
const bills = require('./routes/bills');
const index = require('./routes/index');
const auth = require('./routes/auth');


//Use Routes
app.use('/users/api', users);
app.use('/bills', bills);
app.use('/api', index);
app.use('/auth', auth);
