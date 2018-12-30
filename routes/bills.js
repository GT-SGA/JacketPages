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

// Return the data of all bills
// Still prone to SQL injection attacks.
router.get('/', (req, res) => {
  connection.query('SELECT * FROM bills', (err, rows) => {
    res.send({ data: rows });
  });
});

// Get an individual bill's data
// Still prone to SQL injection attacks.
router.get('/:id', (req, res) => {
  // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
  connection.query(`SELECT * FROM bills WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// Get votes for a specific bill given id
// Still prone to SQL injection attacks.
router.get('/bill_votes', (req, res) => {
  // Return all bills belonging to a certain submitter. Still prone to SQL injection attacks.
  connection.query(`SELECT * FROM bill_votes WHERE id=${req.query.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

router.get('/authors', (req, res) => {
  connection.query('SELECT * FROM bill_authors', (err, rows) => {
    res.send({ data: rows });
  });
});


// Delete the bill by a certain id
// Still prone to SQL injection attacks.
router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM bills WHERE id=${req.params.id}`, (err, rows) => {
    if (err) res.send({ err });
    else res.send({ data: rows });
  });
});

// Get submitter for a certain bill given id
// Still prone to SQL injection attacks.
router.patch('/:id/pass', (req, res) => {
  connection.query(`UPDATE bills SET status=6 WHERE id=${req.query.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// routerrove a bill for the graduate president
// Still prone to SQL injection attacks.
router.patch('/:id/sign_gp', (req, res) => {
  connection.query(`UPDATE bill_authors SET grad_pres_id=${req.query.gp_id} WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// routerrove a bill for the graduate secretary
// Still prone to SQL injection attacks.
router.patch('/:id/sign_gs', (req, res) => {
  connection.query(`UPDATE bill_authors SET grad_secr_id=${req.query.gs_id} WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// routerrove a bill for the undergraduate president
// Still prone to SQL injection attacks.
router.patch('/:id/sign_up', (req, res) => {
  connection.query(`UPDATE bill_authors SET undr_pres_id=${req.query.up_id} WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// routerrove a bill for the undergraduate secretary
// Still prone to SQL injection attacks.
router.patch('/:id/sign_us', (req, res) => {
  connection.query(`UPDATE bill_authors SET undr_secr_id=${req.query.us_id} WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// routerrove a bill for the vice president of finance
// Still prone to SQL injection attacks.
router.patch('/:id/sign_vf', (req, res) => {
  connection.query(`UPDATE bill_authors SET vp_fina_id=${req.query.vf_id} WHERE id=${req.params.id}`, (err, rows) => {
    res.send({ data: rows });
  });
});

// Create a new bill
// Still prone to SQL injection attacks.
/* Data format:
  authors: {
    undr_auth_id,
    grad_auth_id,
  },
  bill: {
    category,
    title,
    description,
    fundraising,
    type,
    org_id,
    dues,
    ugMembers,
    gMembers,
  }
*/
router.post('/', (req, res) => {
  connection.query(
    `INSERT INTO bill_authors (undr_auth_id, grad_auth_id) VALUES (
      '${req.query["data_Authors_undr_auth_id"]}',
      '${req.query["data_Authors_grad_auth_id"]}')`,
    (err, rows) => {
      if (err) console.log(err);
      const cat = req.query['data_Bill_category'];
      const catChar = cat === 'Joint' ? 'J' : cat === 'Undergraduate' ? 'U' : cat === 'Graduate' ? 'G' : 'B';
      function pad(n, width, z = '0') {
        n += '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }
      const { insertId } = rows;

      connection.query(`SELECT substr(number,4) as num, NOW() as now FROM bills WHERE substr(number,3,1) = '${catChar}' ORDER BY num DESC LIMIT 1`, (err, rows) => {
        if (err) console.log(err);
        const number = `${Number(rows[0].now.toLocaleDateString().split('-')[0].substring(1)) + 1}${catChar}${rows[0].num ? pad((Number(rows[0].num) + 1).toString(), 3) : '001'}`;
        connection.query(`INSERT INTO bills (create_date, last_mod_date, title, description, fundraising, type, category, org_id, dues, ugMembers, gMembers, auth_id, status, number) VALUES
          (NOW(), NOW(), '${req.query.bill.title}', '${req.query.bill.description}', '${req.query["data_Bill_fundraising"]}', '${req.query["data_Bill_type"]}',
          '${req.query["data_Bill_category"]}', ${req.query["data_Bill_org_id"]}, '${req.query["data_Bill_dues"]}', '${req.query["data_Bill_ugMembers"]}',
          ${req.query["data_Bill_gMembers"]}, ${insertId}, 1, '${number}')`,
        (err, rows) => {
          if (err) console.log(err);
          const billId = insertId;
          if (req.query['data_Bill_type'] !== 'Resolution') {
            for (let i = 0; req.query[`data_${i}_LineItem_line_number`]; i += 1) {
              const line_number = req.query[`data_${i}_LineItem_line_number`];
              const name = req.query[`data_${i}_LineItem_name`];
              const cost_per_unit = req.query[`data_${i}_LineItem_cost_per_unit`];
              const quantity = req.query[`data_${i}_LineItem_quantity`];
              const total_cost = req.query[`data_${i}_LineItem_total_cost`];
              const amount = req.query[`data_${i}_LineItem_amount`];
              const account = req.query[`data_${i}_LineItem_account`];
              const type = req.query[`data_${i}_LineItem_type`];
              const comments = req.query[`data_${i}_LineItem_comments`];
              connection.query(`INSERT INTO line_items (line_number, bill_id, name, cost_per_unit, quantity, total_cost, amount, account, type, comments, last_mod_date) VALUES
                (${line_number}, ${billId}, '${name}', ${cost_per_unit}, ${quantity}, ${total_cost}, ${amount}, '${account}', '${type ? type : ""}', ${comments ? comments : null}, NOW())`,
              (err, rows) => {
                if (err) console.log(err);
              });
            }
          }
          res.send('done');
        });
      });
    },
  );
});

// Update a bill
// Still prone to SQL injection attacks.
/* Data structure:
authors: {
  undr_auth_id,
  grad_auth_id,
  id
}, bill: {
  title,
  description,
  fundraising,
  type,
  category,
  org_id,
  dues,
  ugMembers,
  gMembers
}
*/
router.patch('/:id', (req, res) => {
  const { authors, bill } = req.query;

  connection.query(`UPDATE bill_authors SET
    undr_auth_id='${authors.undr_auth_id}',
    grad_auth_id='${authors.grad_auth_id}'
    WHERE id=${authors.id}`,
  (err, rows) => {
    if (err) console.log(err);
    connection.query(
      `UPDATE bills SET last_mod_date=NOW(),
        title='${bill.title}',
        description='${bill.description}',
        fundraising='${bill.fundraising}',
        type='${bill.type}',
        category='${bill.category}',
        org_id=${bill.org_id},
        dues='${bill.dues}',
        ugMembers=${bill.ugMembers},
        gMembers=${bill.gMembers},
        auth_id=${authors.id} WHERE id=${req.params.id}`,
      (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
      },
    );
  });
});

module.exports = router;
