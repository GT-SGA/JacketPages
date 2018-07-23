const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());

////////////////////////////////////////////////////////////////////////////////  SERVER & DB SETUP 

// Connect to the MySQL database
var connection = mysql.createConnection({
    host        :   "localhost",
    user        :   "root",
    password    :   "leafxrose1312"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// Use the database jacketpages_dev
connection.query("USE jpdev");

app.listen(process.env.PORT || 8081);   //server listening to localhost 8081

app.use(express.static("public"));  //automatically serves static files home.html and its css files

console.log("Running on port 8081"); 


////////////////////////////////////////////////////////////////////////////////  ROUTES TO HTML & CSS DOCS 

app.get('/', function(req, res){    // HOME - routes to home.html on startup - only directs to html file - css needs previous line to be displayed
  res.sendfile('public/home.html');
});

app.get('/jpbills', function(req, res){    // JPBILLS
  res.sendfile('public/jpbills.html');
});

app.get('/sgapeople', function(req, res){    // SGAPEOPLE
  res.sendfile('public/sgapeople.html');
});


////////////////////////////////////////////////////////////////////////////////  SGA PEOPLE 

//Gets user in user table based on id 
app.get("/user", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

//Gets user information based on first and last name
app.get("/person", (req, res) => {
    connection.query(`SELECT * FROM users WHERE first_name="${req.param("first_name")}" and last_name="${req.param("last_name")}"`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

//Gets list of all the people in the sga_people table 
app.get("/people", (req, res) => {
    connection.query(`SELECT * FROM sga_people`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

//Gets user in sga_table based on user_id 
app.get("/sga_member", (req, res) => {
    connection.query(`SELECT * FROM sga_people WHERE user_id=${req.param("user_id")}`, function(err, rows) {
        res.send({data:
                 rows
        });
    });
}); 

app.post("/edit_member", (req, res) => {
    //debugging
    console.log('req.body');
    console.log(req.data);
    res.write('You sent the name "' + req.body.firstname+'".\n');
    res.write('You sent the house "' + req.body.house+'".\n');
    res.write('You sent the department "' + req.body.department+'".\n');
    res.write('You sent the status "' + req.body.status+'".\n');
    res.end()
    
    connection.query(`UPDATE sga_people SET house='${req.body.house}', department='${req.body.department}', status='${req.body.status}' WHERE user_id=${req.body.user_id}`, function(err, rows) {
        if (err) console.log(err); 
    });
    
});

//adds a new member into the sga_people table and users table 
app.post("/add_member", (req, res) => {
    
    //debugging
    console.log('req.body');
    console.log(req.data);
    res.write('You sent the name "' + req.body.firstname+'".\n');
    res.write('You sent the house "' + req.body.house+'".\n');
    res.write('You sent the department "' + req.body.department+'".\n');
    res.write('You sent the status "' + req.body.status+'".\n');
    res.end()
    
    connection.query(`INSERT INTO sga_people (user_id, house, department, status) VALUES ('999999', '${req.body.house}', '${req.body.department}', '${req.body.status}')`, function(err, rows) {
        if (err) console.log(err); 
    });
    
    connection.query(`INSERT INTO users (id, gt_user_name, first_name, last_name) VALUES ('999999', 'test', '${req.body.firstname}', '${req.body.lastname}')`, function(err, rows) {
        if (err) console.log(err); 
    });

});


////////////////////////////////////////////////////////////////////////////////  BILLS 

// Return the data of the bills submitted by a certain submitter
// Still prone to SQL injection attacks.
app.get("/bills_sub", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE submitter=${req.param('submitter')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get an individual bill's data
// Still prone to SQL injection attacks.
app.get("/bill_id", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bills WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get votes for a specific bill given id
// Still prone to SQL injection attacks.
app.get("/bill_votes", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bill_votes WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get an individual organization's data
// Still prone to SQL injection attacks.
app.get("/org", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM organizations WHERE id=${req.param('id')}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Delete the bill by a certain id
// Still prone to SQL injection attacks.
app.delete("/bill_id", (req, res) => {
    connection.query(`DELETE FROM bills WHERE id=${req.param("id")}`, function(err, rows) {
        if (err) res.send({err: err});
        else res.send(`id ${req.param("id")} deleted!`);
    });
});

// Get status for a certain bill given id
// Still prone to SQL injection attacks.
app.get("/bill_status", (req, res) => {
    connection.query(`SELECT name FROM bill_statuses WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get user given id
// Still prone to SQL injection attacks.
app.get("/user", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
app.get("/bill_authors", (req, res) => {
    connection.query(`SELECT * FROM bill_authors WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
app.put("/bill_passed", (req, res) => {
    connection.query(`UPDATE bills SET status=6 WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the graduate president
// Still prone to SQL injection attacks.
app.put("/bill_sign_gp", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_pres_id=${req.param("gp_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the graduate secretary
// Still prone to SQL injection attacks.
app.put("/bill_sign_gs", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_secr_id=${req.param("gs_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the undergraduate president
// Still prone to SQL injection attacks.
app.put("/bill_sign_up", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_pres_id=${req.param("up_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the undergraduate secretary
// Still prone to SQL injection attacks.
app.put("/bill_sign_us", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_secr_id=${req.param("us_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Approve a bill for the vice president of finance
// Still prone to SQL injection attacks.
app.put("/bill_sign_vf", (req, res) => {
    connection.query(`UPDATE bill_authors SET vp_fina_id=${req.param("vf_id")} WHERE id=${req.param("id")}`, function(err, rows) {
        res.send({data: 
            rows
        });
    });
});

// Create a new bill
// Still prone to SQL injection attacks.
app.post("/bill_create", (req, res) => {
    connection.query(`INSERT INTO bill_authors (undr_auth_id, grad_auth_id) VALUES 
            ('${req.param("data_Authors_undr_auth_id")}', '${req.param("data_Authors_grad_auth_id")}')`, function(err, rows) {
        connection.query(`INSERT INTO bills (create_date, last_mod_date, title, description, fundraising, type, category, org_id, dues, ugMembers, gMembers, auth_id, status) VALUES 
                (NOW(), NOW(), '${req.param("data_Bill_title")}', '${req.param("data_Bill_description")}', '${req.param("data_Bill_fundraising")}', '${req.param("data_Bill_type")}', 
                '${req.param("data_Bill_category")}', ${req.param("data_Bill_org_id")}, '${req.param("data_Bill_dues")}', '${req.param("data_Bill_ugMembers")}', 
                ${req.param("data_Bill_gMembers")}, ${rows.insertId}, 1)`,
                function(err, rows) {
            let billId = rows.insertId;
            for (let i = 0; req.param(`data_${i}_LineItem_line_number`); i++) {
                connection.query(`INSERT INTO line_items (line_number, bill_id, name, cost_per_unit, quantity, total_cost, amount, account, type, comments, last_mod_date) VALUES
                        (${req.param('data_${i}_LineItem_line_number')}, ${billId}, ${req.param('data_${i}_LineItem_name')}, ${req.param('data_${i}_LineItem_cost_per_unit')}, 
                                ${req.param('data_${i}_LineItem_quantity')}, ${req.param('data_${i}_LineItem_total_cost')}, 
                                ${req.param('data_${i}_LineItem_amount')}, ${req.param('data_${i}_LineItem_account')}, 
                                ${req.param('data_${i}_LineItem_type')}, ${req.param('data_${i}_LineItem_comments')}, NOW())`,
                function(err, rows) {
                    if (err) console.log(err);
                    console.log(req.param("data_0_LineItem_line_number"));
                });
            }
            res.send(rows);
        });
    });
});
