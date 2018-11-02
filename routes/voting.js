const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const router = express.Router();

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

let returnRouter = function(io) {
  route.post('/start_voting', (req, res) => {
    io.broadcast('adminStartVoting');
  });
};

module.exports = { returnRouter };
