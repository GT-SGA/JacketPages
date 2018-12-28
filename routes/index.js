const express = require('express');
const mysql = require('mysql');

const router = express.Router();

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

const bills = require('./bills');
const users = require('./users');
const voting = require('./voting');

router.use('/bills', bills);
router.use('/users', users);
router.use('/voting', voting);

module.exports = router;
