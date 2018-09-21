const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const router = express.Router();

var connection = mysql.createConnection({
    host        :   "localhost",
    user        :   "root",
    password    :   "sanjay123"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// Use the database jacketpages_dev
connection.query("USE jpdev");


//index route
router.get('/', function(req, res){    // HOME - routes to home.html on startup - only directs to html file - css needs previous line to be displayed
  res.sendfile('public/home.html');
});

//jpbill page
router.get('/jpbills', function(req, res){    // JPBILLS
  res.sendfile('public/jpbills.html');
});

//sga people page
router.get('/sgapeople', function(req, res){    // SGAPEOPLE
  res.sendfile('public/sgapeople.html');
});

module.exports = router;