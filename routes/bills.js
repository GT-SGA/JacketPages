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

// Return the data of the bills submitted by a certain submitter
// Still prone to SQL injection attacks.
router.get("/bills_sub", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE submitter=${req.query['submitter']}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Return the data of all bills with filter
// Still prone to SQL injection attacks.
router.get("/bills_filteredwithcategory", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE status BETWEEN ${req.query['from']} AND ${req.query['to']} AND category='${req.query["category"]}'`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Return the data of all bills with filter
// Still prone to SQL injection attacks.
router.get("/bills_filtereddate", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE submit_date BETWEEN DATE("${req.query['from']}") AND DATE("${req.query['to']}")`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Return the data of all bills with filter
// Still prone to SQL injection attacks.
router.get("/bills_filtered", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE status BETWEEN ${req.query['from']} AND ${req.query['to']}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Return the data of all bills with keyword
// Still prone to SQL injection attacks.
router.get("/bills_keyword", (req, res) => {
    connection.query(`SELECT * FROM bills WHERE title REGEXP '.*${req.query["keyword"]}.*'`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Return the data of all bills
// Still prone to SQL injection attacks.
router.get("/bills_all", (req, res) => {
    connection.query(`SELECT * FROM bills`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get an individual bill's data
// Still prone to SQL injection attacks.
router.get("/bill_id", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bills WHERE id=${req.query['id']}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get votes for a specific bill given id
// Still prone to SQL injection attacks.
router.get("/bill_votes", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM bill_votes WHERE id=${req.query['id']}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get an individual organization's data
// Still prone to SQL injection attacks.
router.get("/org", (req, res) => {
    // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
    connection.query(`SELECT * FROM organizations WHERE id=${req.query['id']}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Delete the bill by a certain id
// Still prone to SQL injection attacks.
router.delete("/bill_id", (req, res) => {
    connection.query(`DELETE FROM bills WHERE id=${req.query["id"]}`, function(err, rows) {
        if (err) res.send({err: err});
        else res.send(`id ${req.query["id"]} deleted!`);
    });
});

// Get status for a certain bill given id
// Still prone to SQL injection attacks.
router.get("/bill_status", (req, res) => {
    connection.query(`SELECT name FROM bill_statuses WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get user given id
// Still prone to SQL injection attacks.
router.get("/user", (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
router.get("/bill_authors", (req, res) => {
    connection.query(`SELECT * FROM bill_authors WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
router.put("/bill_passed", (req, res) => {
    connection.query(`UPDATE bills SET status=6 WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// routerrove a bill for the graduate president
// Still prone to SQL injection attacks.
router.put("/bill_sign_gp", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_pres_id=${req.query["gp_id"]} WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// routerrove a bill for the graduate secretary
// Still prone to SQL injection attacks.
router.put("/bill_sign_gs", (req, res) => {
    connection.query(`UPDATE bill_authors SET grad_secr_id=${req.query["gs_id"]} WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// routerrove a bill for the undergraduate president
// Still prone to SQL injection attacks.
router.put("/bill_sign_up", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_pres_id=${req.query["up_id"]} WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// routerrove a bill for the undergraduate secretary
// Still prone to SQL injection attacks.
router.put("/bill_sign_us", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_secr_id=${req.query["us_id"]} WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// routerrove a bill for the vice president of finance
// Still prone to SQL injection attacks.
router.put("/bill_sign_vf", (req, res) => {
    connection.query(`UPDATE bill_authors SET vp_fina_id=${req.query["vf_id"]} WHERE id=${req.query["id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

// Create a new bill
// Still prone to SQL injection attacks.
router.post("/bill_create", (req, res) => {
    connection.query(`INSERT INTO bill_authors (undr_auth_id, grad_auth_id) VALUES
            ('${req.query["data_Authors_undr_auth_id"]}', '${req.query["data_Authors_grad_auth_id"]}')`, function(err, rows) {
        if (err) console.log(err);
        let cat = req.query['data_Bill_category'];
        let catChar = cat === 'Joint' ? 'J' : cat === 'Undergraduate' ? 'U' : cat === 'Graduate' ? 'G' : 'B';
        function pad(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }
        let insertId = rows.insertId;
        connection.query(`SELECT substr(number,4) as num, NOW() as now FROM bills WHERE substr(number,3,1) = '${catChar}' ORDER BY num DESC LIMIT 1`, function(err, rows) {
            if (err) console.log(err);
            let number = `${Number(rows[0].now.toLocaleDateString().split('-')[0].substring(1)) + 1}${catChar}${rows[0].num ? pad((Number(rows[0].num) + 1).toString(), 3) : '001'}`;
            connection.query(`INSERT INTO bills (create_date, last_mod_date, title, description, fundraising, type, category, org_id, dues, ugMembers, gMembers, auth_id, status, number) VALUES
                    (NOW(), NOW(), '${req.query["data_Bill_title"]}', '${req.query["data_Bill_description"]}', '${req.query["data_Bill_fundraising"]}', '${req.query["data_Bill_type"]}',
                    '${req.query["data_Bill_category"]}', ${req.query["data_Bill_org_id"]}, '${req.query["data_Bill_dues"]}', '${req.query["data_Bill_ugMembers"]}',
                    ${req.query["data_Bill_gMembers"]}, ${insertId}, 1, '${number}')`,
                    function(err, rows) {
                        if (err) console.log(err);
                let billId = insertId;
                if (req.query['data_Bill_type'] !== 'Resolution') {
                    for (let i = 0; req.query[`data_${i}_LineItem_line_number`]; i++) {
                        let line_number = req.query[`data_${i}_LineItem_line_number`];
                        let name = req.query[`data_${i}_LineItem_name`];
                        let cost_per_unit = req.query[`data_${i}_LineItem_cost_per_unit`];
                        let quantity = req.query[`data_${i}_LineItem_quantity`];
                        let total_cost = req.query[`data_${i}_LineItem_total_cost`];
                        let amount = req.query[`data_${i}_LineItem_amount`];
                        let account = req.query[`data_${i}_LineItem_account`];
                        let type = req.query[`data_${i}_LineItem_type`];
                        let comments = req.query[`data_${i}_LineItem_comments`];
                        connection.query(`INSERT INTO line_items (line_number, bill_id, name, cost_per_unit, quantity, total_cost, amount, account, type, comments, last_mod_date) VALUES
                                (${line_number}, ${billId}, '${name}', ${cost_per_unit}, ${quantity}, ${total_cost}, ${amount}, '${account}', '${type ? type : ""}', ${comments ? comments : null}, NOW())`,
                        function(err, rows) {
                            if (err) console.log(err);
                        });
                    }
                }
                res.send('done');
            });
        });
    });
});

// Update a bill
// Still prone to SQL injection attacks.
router.post("/bill_update", (req, res) => {
    connection.query(`UPDATE bill_authors SET undr_auth_id='${req.query["data_Authors_undr_auth_id"]}', grad_auth_id='${req.query["data_Authors_grad_auth_id"]}'
            WHERE id=${req.query["data_Authors_id"]}`, function(err, rows) {
        if (err) console.log(err);
        connection.query(`UPDATE bills SET last_mod_date=NOW(), title='${req.query["data_Bill_title"]}', description='${req.query["data_Bill_description"]}',
                fundraising='${req.query["data_Bill_fundraising"]}', type='${req.query["data_Bill_type"]}', category='${req.query["data_Bill_category"]}',
                org_id=${req.query["data_Bill_org_id"]}, dues='${req.query["data_Bill_dues"]}', ugMembers=${req.query["data_Bill_ugMembers"]},
                gMembers=${req.query["data_Bill_gMembers"]}, auth_id=${req.query["data_Authors_id"]} WHERE id=${req.query["data_Bill_id"]}`,
                function(err, rows) {
            if (err) console.log(err);
            res.send(rows);
        });
    });
});

/**
Voting for Bills
**/

// Creates a database entry in bill_votes for the current bill
router.post("/create_votes", (req, res) => {
  let currDate = (new Date()).toISOString().substring(0, 10);
  connection.query("INSERT INTO bill_votes (date, yeas, nays, abstains, comments) VALUES (\"" + currDate + "\", 0, 0, 0, \"\");", function(err, rows) {
    if (err) throw err;
    console.log("votes entry created");
    io.emit("voted");
  });
});

// Gets the most recently added entry in bill_votes.
// Used for updating yeas, nays, abstains
router.get("/bill_vote", (req, res) => {
  connection.query("Select * from bill_votes ORDER BY id DESC LIMIT 1", function(err, rows) {
    if (err) throw err;
    res.send(rows[0]);
  });
})

// Updates the bill_votes entry based on a button press
router.post("/votes/:opt", (req, res) => {
  connection.query("UPDATE bill_votes SET "+req.params.opt+"="+req.params.opt+"+1 ORDER BY id DESC LIMIT 1;", function(err, rows, fields) {
    if (err) throw err;
    console.log("update successful");
    res.sendStatus(200);
    // Tells server to run getVotes
    io.emit("voted");
  });
})

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
router.get("/bill_line_items", (req, res) => {
    connection.query(`SELECT * FROM line_items WHERE bill_id=${req.query["bill_id"]}`, function(err, rows) {
        res.send({data:
            rows
        });
    });
});

module.exports = router;