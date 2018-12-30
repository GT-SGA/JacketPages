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

// Get all organizations' data
// Still prone to SQL injection attacks.
router.get('/', (req, res) => {
  connection.query('SELECT * FROM budgets', (err, rows) => {
    res.send({ data: rows });
  });
});

router.get('/lineItems', (req, res) => {
  connection.query('SELECT * FROM budget_line_items', (err, rows) => {
    res.send({ data: rows });
  });
});

module.exports = router;
