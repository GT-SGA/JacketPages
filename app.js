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
  password: 'password',
  database: 'jpdev'
});

app.listen(process.env.PORT || 8081); 
console.log("Running on port 8081"); 

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


app.get("/people", (req, res) => {
    connection.query(`SELECT * FROM sga_people`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

////Connect
//connection.connect((err) => {
//  if (err) throw err;
//  console.log('Connected!');
//});
//
//connection.query('SELECT user_id FROM sga_people LIMIT 5', (err, rows) => {
//    if(err) throw err; 
//    
//    console.log('Data received:\n');
//    console.log(rows); 
//});

        
//const app = express(); 
//
//app.listen('3000', () => {
//    console.log('Server started on port 3000');
//}); 
//

//const pool = mysql.createPool({
//    host: 'localhost', 
//    user: 'root', 
//    password: 'leafxrose1312', 
//    database: 'jpdev', 
//    charset: 'utf8'
//}); 
//
////html string that will be send to browser
//var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';
//
////sets and returns html table with results from sql select
////Receives sql query and callback function to return the table
//function setResHtml(sql, cb){
//  pool.getConnection((err, con)=>{
//    if(err) throw err;
//
//    con.query(sql, (err, res, cols)=>{
//      if(err) throw err;
//
//      var table =''; //to store html table
//
//      //create html table with data from res.
//      for(var i=0; i<res.length; i++){
//        table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].user_id +'</td><td>'+ res[i].house +'</td><td>'+ res[i].department +'</td></tr>';
//      }
//      table ='<table border="1"><tr><th>Num.</th><th>User ID</th><th>House</th><th>Department</th></tr>'+ table +'</table>';
//
//      con.release(); //Done with mysql connection
//
//      return cb(table);
//    });
//  });
//}
//
//let sql ='SELECT user_id, house, department FROM sga_people';
//
////create the server for browser access
//const server = http.createServer((req, res)=>{
//  setResHtml(sql, resql=>{
//    reo = reo.replace('{${table}}', resql);
//    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//    res.write(reo, 'utf-8');
//    res.end();
//  });
//});
//
//server.listen(8080, ()=>{
//  console.log('Server running at //localhost:8080/');
//});
