const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const router = express.Router();
const CASAuthentication = require('cas-authentication-gt');
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

const basePath = 'http://sga.gatech.edu'

// Express Session
router.use(session({
  secret: 'jpsessionkey',
  resave: false,
  saveUninitialized: true,
}));


//Cas authentication
const cas = new CASAuthentication({
  cas_url: 'https://login.gatech.edu/cas',
  service_url: 'http://sga.gatech.edu',
  cas_version: 'saml1.1',
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
// router.get( '/', cas.bounce, function ( req, res ) {
//     res.send( '<html><body>Hello!</body></html>' );
// });

router.get( '/login', cas.bounce, function(req, res) {
  redirectPath = req.query['redirectTo'];
  if (redirectPath) {
    res.redirect(encodeURI(basePath + redirectPath));
  } else {
    res.redirect(encodeURI(basePath));
  }
  
});

router.get( '/logout', cas.logout, function(req, res) {
  
})

router.get( '/info', cas.block, function(req, res) {
  return (res.json ({
    'uid': req.session[cas.session_name],
    'otherInfo': req.session[cas.session_info]
  }));
});

module.exports = router;

