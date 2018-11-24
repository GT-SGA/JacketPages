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


//Gets list of all users in the user table
router.get("/users", (req, res) => {
    connection.query(`SELECT * FROM users ORDER BY id DESC`, function(err, rows) {
        res.send({data: rows});
    });
});

//Gets user in user table based on id
//used in sgapeople.html to get first and last names
router.get("/users/:id", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.params.id}`, function(err, rows) {
        res.send({data:
                 rows
        });
    });
});

router.get('/user/:uid', (req, res) => {
  connection.query(`SELECT * FROM users WHERE gt_user_name='${req.params.uid}'`, (err, rows) => {
    res.send({ data: rows });
  });
});

router.get("/find_user", (req,res) => {
    connection.query(`SELECT * FROM users WHERE first_name='${req.query.first_name}' && last_name='${req.query.last_name}'`, function(err, rows) {
        res.send({data: rows});
    });
});

//Gets most recently added user from user table
//used to get id to add to datbase in sgapeopleadd
router.get("/last_member", (req, res) => {
    connection.query(`SELECT * FROM users ORDER BY id DESC LIMIT 1`, function(err, rows) {
        res.send({data:
                  rows});
    });
});

//Gets list of all the people in the sga_people table
router.get("/people", (req, res) => {
    connection.query(`SELECT * FROM sga_people`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

//Gets user in sga_table based on user_id
router.get("/sga_member", (req, res) => {
    connection.query(`SELECT * FROM sga_people WHERE user_id=${req.query.user_id}`, function(err, rows) {
        res.send({data:
                 rows
        });
    });
});

//deletes a user from user table using their id passed in through the url
router.get("/delete_user", (req, res) => {
    //debugging
    res.write('You deleted the user with the id "' + req.query.id+'".\n');

    connection.query(`DELETE FROM users WHERE id=${req.query.id}`, function(err, rows) {
        if (err) console.log(err);
    });
});

//deletes a member from sga_people table using their user_id passed in through the url
router.get("/delete_member", (req, res) => {
    //debugging
    res.write('You deleted the sga member with the user_id "' + req.query.user_id+'".\n');

    connection.query(`DELETE FROM sga_people WHERE id=${req.query.user_id}`, function(err, rows) {
        if (err) console.log(err);
    });
});

//edits a user from user table using their id passed in through the url
router.post("/edit_user", (req, res) => {
    //debugging
    res.write('You sent the name "' + req.body.firstname+'".\n');
    res.write('You sent the level"' + req.body.level+'".\n');
    res.write('You sent the email"' + req.body.email+'".\n');
    res.write('You sent the major"' + req.body.major+'".\n');
    res.write('You sent the year"' + req.body.year+'".\n');
    res.end()

    connection.query(`UPDATE users SET email='${req.body.email}', first_name='${req.body.firstname}', last_name='${req.body.lastname}', level='${req.body.level}', major='${req.body.major}', year='${req.body.year}' WHERE id=${req.query.id}`, function(err, rows) {
        if (err) console.log(err);
    });
});

//edits a sga member using their id in the user table and user id in the sga_people table
router.post("/edit_member", (req, res) => {
    //debugging
    console.log(req.data);
    res.write('You sent the name "' + req.body.firstname+'".\n');
    res.write('You sent the house "' + req.body.house+'".\n');
    res.write('You sent the department "' + req.body.department+'".\n');
    res.end()

    connection.query(`UPDATE sga_people SET house='${req.body.house}', department='${req.body.department}', status='${req.body.status}' WHERE user_id=${req.query.id}`, function(err, rows) {
        if (err) console.log(err);
    });

});

//adds a new user into the users table
//make sure major and year columns are added to database
router.post("/add_user", (req, res) => {

    //debugging
    res.write('You sent the name "' + req.body.firstname+'".\n');
    res.write('You sent the gtusername "' + req.body.gtusername+'".\n');
    res.write('You sent the email "' + req.body.email+'".\n');
    res.write('You sent the major "' + req.body.major+'".\n');
    res.write('You sent the year "' + req.body.year+'".\n');
    res.end()

    //id is passed in through the url
    //in usersadd, ajax gets id of most recently added user than adds 1 to it. Passes this number through the url
    connection.query(`INSERT INTO users (id, gt_user_name, email, first_name, last_name, major, year) VALUES ('${req.query.id}', '${req.body.gtusername}', '${req.body.email}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.major}', '${req.body.year}')`, function(err, rows) {
        if (err) console.log(err);
    });
});

//adds a new member into the sga_people table
router.post("/add_sga_member", (req, res) => {

    //debugging
    res.write('You sent the id "' + req.query.id+'".\n');
    res.write('You sent the house "' + req.body.house+'".\n');
    res.write('You sent the department "' + req.body.department+'".\n');
    res.end()

    //user id is passed in through the url
    connection.query(`INSERT INTO sga_people (user_id, house, department) VALUES ('${req.query.id}', '${req.body.house}', '${req.body.department}')`, function(err, rows) {
        if (err) console.log(err);
    });
});

module.exports = router;
