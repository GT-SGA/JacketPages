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
// Send the data of the bills on localhost:8081
app.get("/bills", (req, res) => {
    connection.query("SELECT * FROM bills", function(err, rows) {
        res.send({data: 
            rows
        });
    });
});
