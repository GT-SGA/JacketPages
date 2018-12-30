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


// Gets list of all users in the user table
router.get('/', (req, res) => {
  connection.query('SELECT * FROM users ORDER BY id DESC', (err, rows) => {
    res.send({ data: rows });
  });
});

// Gets user in user table based on id
router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// router.get('/uid=:uid', (req, res) => {
//   connection.query(`SELECT * FROM users WHERE gt_user_name='${req.params.uid}'`, (err, rows) => {
//     res.send({ data: rows });
//   });
// });

// router.get('/firstName=:firstName&lastName=:lastName', (req, res) => {
//   connection.query(`SELECT * FROM users WHERE first_name='${req.params.firstName}' && 
// last_name='${req.params.lastName}'`, (err, rows) => {
//     res.send({ data: rows });
//   });
// });

// Gets most recently added user from user table
// used to get id to add to database in sgapeopleadd
router.get('/last_member', (req, res) => {
  connection.query('SELECT * FROM users ORDER BY id DESC LIMIT 1', (err, rows) => {
    res.send({ data: rows });
  });
});

// Deletes a user from user table using their id passed in through the url
router.delete('/:id', (req, res) => {
  // debugging
  res.write('You deleted the user with the id "' + req.query.id+'".\n');
  connection.query(`DELETE FROM users WHERE id=${req.query.id}`, (err, rows) => {
    if (err) console.log(err);
  });
});

// Edits a user from user table using their id passed in through the url
router.patch('/:id', (req, res) => {
  // Debugging
  res.write('You sent the name "' + req.body.firstname+'".\n');
  res.write('You sent the level"' + req.body.level+'".\n');
  res.write('You sent the email"' + req.body.email+'".\n');
  res.write('You sent the major"' + req.body.major+'".\n');
  res.write('You sent the year"' + req.body.year+'".\n');
  res.end();

  connection.query(`UPDATE users SET email='${req.body.email}', first_name='${req.body.firstname}', last_name='${req.body.lastname}', level='${req.body.level}', major='${req.body.major}', year='${req.body.year}' WHERE id=${req.query.id}`, (err, rows) => {
    if (err) console.log(err);
  });
});

// Adds a new user into the users table
router.post('/', (req, res) => {
  // Debugging
  res.write('You sent the name "' + req.body.firstname+'".\n');
  res.write('You sent the gtusername "' + req.body.gtusername+'".\n');
  res.write('You sent the email "' + req.body.email+'".\n');
  res.end();

  connection.query(`INSERT INTO users (id, gt_user_name, email, first_name, last_name, major, year) VALUES ('${req.query.id}', '${req.body.gtusername}', '${req.body.email}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.major}', '${req.body.year}')`, (err, rows) => {
    if (err) console.log(err);
  });
});

module.exports = router;
