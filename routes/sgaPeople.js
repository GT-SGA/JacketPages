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

// Gets list of all the people in the sga_people table
router.get('/', (req, res) => {
  connection.query('SELECT * FROM sga_people', (err, rows) => {
    res.send({ data: rows });
  });
});

// Gets user in sga_people table based on id
router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM sga_people WHERE user_id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// Deletes a member from sga_people table using their user_id passed in through the url
router.delete('/:id', (req, res) => {
  // Debugging
  res.write(`You deleted the sga member with the user_id ${req.query.user_id}.\n`);

  connection.query(`DELETE FROM sga_people WHERE id=${req.query.user_id}`, (err, rows) => {
    if (err) console.log(err);
    else res.send({ data: rows });
  });
});

// Edits a sga member using their id in the user table and user id in the sga_people table
router.patch('/:id', (req, res) => {
  // debugging
  console.log(req.data);
  res.write(`You sent the name '${req.body.firstname}'.\n`);
  res.write(`You sent the house '${req.body.house}'.\n`);
  res.write(`You sent the department '${req.body.department}'.\n`);
  res.end();

  connection.query(`UPDATE sga_people SET house='${req.body.house}', department='${req.body.department}', status='${req.body.status}' WHERE user_id=${req.query.id}`, (err, rows) => {
    if (err) console.log(err);
    else res.send({ data: rows });
  });
});

// Adds a new member into the sga_people table
router.post('/:id', (req, res) => {
  // Debugging
  res.write(`You sent the id '${req.query.id}'.\n`);
  res.write(`You sent the house '${req.body.house}'.\n`);
  res.write(`You sent the department '${req.body.department}'.\n`);
  res.end();

  // User id is passed in through the url
  connection.query(`INSERT INTO sga_people (user_id, house, department) VALUES ('${req.params.id}', '${req.body.house}', '${req.body.department}')`, (err, rows) => {
    if (err) console.log(err);
    else res.send({ data: rows });
  });
});

module.exports = router;
