const express = require('express'); 
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan"); 
const path = require("path"); 
const http = require('http'); 
const mysql = require('mysql');

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

//Create connection 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'leafxrose1312',
  database: 'jpdev'
});

app.listen(process.env.PORT || 8081); 
console.log("Running on port 8081"); 

//finds a person in the users database based on their id
app.get("/user", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

app.get("/person", (req, res) => {
    connection.query(`SELECT * FROM sga_people WHERE user_id=${req.param("user_id")}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

//returns list of all people from sga_people 
app.get("/people", (req, res) => {
    connection.query(`SELECT * FROM sga_people`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

app.post("/add_member", (req, res) => {
    console.log('${req.param("SgaPersonHouse")}'); 
    connection.query(
        `INSERT INTO sga_people (user_id, house, department, status) VALUES ('999999', ${req.param("SgaPersonHouse")}', '${req.param("SgaPersonDepartment")}', '${req.param("SgaPersonStatus")}')`, function(err, rows) {
             if (err) console.log(err); 
             res.send(rows);
         });      
});
