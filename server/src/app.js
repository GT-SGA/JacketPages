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
    host        :   "jacketpagesdev.sga.gatech.edu",
    port        :   "3306"
    user        :   "user_jp_dev",
    password    :   "dE50en*5"
});

var returndata;

// Use the database jacketpages_dev
connection.query("USE jacketpages_dev");

// Send the data of the bills on localhost:3306
app.get("/bills", (req, res) => {
    connection.query("SELECT * FROM users", function(err, rows) {
        res.send({data: [
            rows
        ]});
    });
});
app.listen(process.env.PORT || 3306);
