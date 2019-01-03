const express = require('express');
const mysql = require('mysql');

const router = express.Router();

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

// Get all organizations' data
// Still prone to SQL injection attacks.
router.get('/', (req, res) => {
  connection.query('SELECT * FROM organizations', (err, rows) => {
    res.send({ data: rows });
  });
});

// Get an individual organization's data
router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM organizations WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

router.post('/', (req, res) => {
  connection.query();
});

router.patch('/:id', (req, res) => {
  connection.query(`UPDATE organizations SET
    name=${req.body.name},
    category=${req.body.category},
    tier=${req.body.tier},
    status=${req.body.status},
    website=${req.body.website} WHERE id=${req.params.id}`,
  (err, rows) => {
    if (err) console.log(err);
    res.send({ data: rows });
  });
});

module.exports = router;
