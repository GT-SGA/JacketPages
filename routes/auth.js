const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const router = express.Router();
const CASAuthentication = require('cas-authentication');
const session = require('express-session');

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


// Express Session
router.use(session({
  secret: 'jpsessionkey',
  resave: false,
  saveUninitialized: true,
}));


//Cas authentication
const cas = new CASAuthentication({
  cas_url: 'https://login.gatech.edu/cas/login',
  service_url: 'https://jacketpages.gatech.edu',
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
// router.get( '/', cas.bounce, function ( req, res ) {
//     res.send( '<html><body>Hello!</body></html>' );
// });

router.get( '/', cas.bounce_redirect, function(req, res) {
    res.redirectTo('../');
});

module.exports = router;
