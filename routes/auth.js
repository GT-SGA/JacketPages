const express = require('express');
require('cors');
const mysql = require('mysql');

const router = express.Router();

const CASAuthentication = require('cas-authentication-gt');
const session = require('express-session');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
// Use the database jacketpages_dev
connection.query('USE jpdev');

const basePath = 'http://jacketpages.sga.gatech.edu';

// Express Session
router.use(session({
  secret: 'jpsessionkey',
  resave: false,
  saveUninitialized: true,
}));


// Cas authentication
const cas = new CASAuthentication({
  cas_url: 'https://login.gatech.edu/cas',
  service_url: 'http://jacketpages.sga.gatech.edu',
  cas_version: 'saml1.1',
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
// router.get( '/', cas.bounce, function ( req, res ) {
//     res.send( '<html><body>Hello!</body></html>' );
// });

router.get('/adminLogin', (req, res) => {
  connection.query("SELECT * FROM users WHERE gt_user_name='ewilson79'", (err, rows) => {
    res.send({ data: rows });
  });
});

router.get('/repLogin', (req, res) => {
  connection.query("SELECT * FROM users WHERE level='sga_user'", (err, rows) => {
    res.send({ data: rows });
  });
});

router.get('/userLogin', (req, res) => {
  connection.query("SELECT * FROM users WHERE level='gt_member'", (err, rows) => {
    res.send({ data: rows });
  });
});

router.get('/login', cas.bounce, (req, res) => {
  const redirectPath = req.query.redirectTo;
  if (redirectPath) {
    res.redirect(encodeURI(basePath + redirectPath));
  } else {
    res.redirect(encodeURI(basePath));
  }
});

router.get('/logout', cas.logout, () => {

});

router.get('/info', cas.block, (req, res) => (
  res.json({
    uid: req.session[cas.session_name],
    otherInfo: req.session[cas.session_info],
  })
));

module.exports = router;
