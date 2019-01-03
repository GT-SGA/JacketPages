const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
// const CASAuthentication = require('cas-authentication-gt');

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

// const cas = new CASAuthentication({
//   cas_url: 'https://login.gatech.edu/cas/login',
//   service_url: 'jacketpages.sga.gatech.edu',
// });

/* SERVER & DB SETUP */
console.log('host', process.env.RDS_HOSTNAME);
console.log('user', process.env.RDS_USERNAME);
console.log('password', process.env.RDS_PASSWORD);
console.log('port', process.env.RDS_PORT);

// Connect to the MySQL database
const connection = mysql.createConnection({
  host: 'aanf3sb0p160r2.cgutnqwmdujn.us-east-1.rds.amazonaws.com',
  user: 'jacketpages',
  password: 'password',
  port: '3306',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

// Use the database jacketpages_dev
connection.query('USE jpdev');

const port = (process.env.PORT || 8081);
const server = app.listen(port);

const io = require('socket.io').listen(server);

app.use(express.static('public')); // automatically serves static files home.html and its css files

console.log('Running on port ' + port);

// Load Routes
const auth = require('./routes/auth');
const api = require('./routes');

// Use Routes
app.use('/auth', auth);
app.use('/api', api);
