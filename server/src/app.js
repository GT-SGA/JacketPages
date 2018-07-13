const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

// Connect to the MySQL database
var connection = mysql.createConnection({
    host        :   "localhost",
    user        :   "localuser",
    password    :   "password"
});
// Use the database jacketpages_dev
connection.query("USE jacketpages_dev");

app.listen(process.env.PORT || 8081);

// Send the data of the bills submitted by a certain submitter
app.get("/bills_sub", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bills WHERE submitter=${req.param('submitter')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get an individual bill's data
app.get("/bill_id", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bills WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get votes for a specific bill given id
app.get("/bill_votes", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bill_votes WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get an individual organization's data
app.get("/org", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM organizations WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Delete the bill by a certain id
app.delete("/bill_id", (req, res) => {
    connection.query(`DELETE FROM bills WHERE id=${req.param("id")}`, function(err, rows) {
        if (err) res.send({err: err});
        else res.send(`id ${req.param("id")} deleted!`);
    });
});

// Get status for a certain bill given id
app.get("/bill_status", (req, res) => {
    connection.query(`SELECT name FROM bill_statuses WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get user given id
app.get("/user", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get submitter for a certain bill given id
app.get("/bill_authors", (req, res) => {
    connection.query(`SELECT * FROM bill_authors WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get submitter for a certain bill given id
app.put("/bill_passed", (req, res) => {
    connection.query(`UPDATE bills SET status=6 WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the graduate president
app.put("/bill_sign_gp", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_pres_id=${req.param("gp_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the graduate secretary
app.put("/bill_sign_up", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_secr_id=${req.param("gs_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the undergraduate president
app.put("/bill_sign_gp", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_pres_id=${req.param("up_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the undergraduate secretary
app.put("/bill_sign_up", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_secr_id=${req.param("us_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});
