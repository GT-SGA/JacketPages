const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
  host: 'aanf3sb0p160r2.cgutnqwmdujn.us-east-1.rds.amazonaws.com',
  user: 'jacketpages',
  password: 'password',
  port: '3306',
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
router.get('/id=:id', (req, res) => {
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
  console.log('authors endpoint');
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
    line_items,
  }
*/
router.post('/', (req, res) => {
  connection.query(
    `INSERT INTO bill_authors (undr_auth_id, grad_auth_id) VALUES (
      '${req.body.authors.undr_auth_id}',
      '${req.body.authors.grad_auth_id}')`,
    (authErr, rows) => {
      if (authErr) console.log(authErr);
      const cat = req.body.bill.category;
      const catChar = cat.charAt(0);
      function pad(n, width, z = '0') {
        n += '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }
      const { insertId } = rows;

      connection.query(`SELECT substr(number,4) as num, NOW() as now FROM bills WHERE substr(number,3,1) = '${catChar}' ORDER BY num DESC LIMIT 1`, (billsErr, rows) => {
        if (billsErr) console.log(billsErr);
        const number = `${Number(rows[0].now.toLocaleDateString().split('-')[0].substring(1)) + 1}${catChar}${rows[0].num ? pad((Number(rows[0].num) + 1).toString(), 3) : '001'}`;
        connection.query(`INSERT INTO bills (create_date, last_mod_date, title, description, fundraising, type, category, org_id, dues, ugMembers, gMembers, auth_id, status, number) VALUES
          (NOW(), NOW(), '${req.body.bill.title}', '${req.query.bill.description}', '${req.body.bill.fundraising}', '${req.body.bill.type}',
          '${req.body.bill.category}', ${req.body.bill.org_id}, '${req.body.bill.dues}', '${req.body.bill.ugMembers}', ${req.body.bill.gMembers}, ${insertId}, 1, '${number}')`,
        (err, rows) => {
          if (err) console.log(err);
          const billId = insertId;
          if (req.body.bill.type !== 'Resolution') {
            req.body.line_items.forEach((item) => {
              connection.query(`INSERT INTO line_items (line_number, bill_id, name, cost_per_unit, quantity, total_cost, amount, account, type, comments, last_mod_date) VALUES
                (${item.number}, ${billId}, '${item.name}', ${item.cost}, ${item.quantity}, ${item.total_cost}, ${item.amount}, '${item.account}', '${item.type || ''}', ${item.comments || null}, NOW())`,
              (itemsErr, rows) => {
                if (itemsErr) console.log(itemsErr);
              });
            });
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
