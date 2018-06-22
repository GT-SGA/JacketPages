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

var connection = mysql.createConnection({
    host        :   "localhost",
    user        :   "user_jp_dev",
    password    :   "dE50en*5"
});

var returndata;
connection.query("USE jacketpages_dev");
connection.query("SELECT * FROM users", function(err, rows) {
    returndata = rows;
});

app.get("/bills", (req, res) => {
    res.send({data: [
        {data1: "hello", data2: "world"}
    ]});
});
app.listen(process.env.PORT || 8081);
