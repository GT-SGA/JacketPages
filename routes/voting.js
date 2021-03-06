const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const router = express.Router();

const redis = require('../redis');

const Redis = new redis();

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

router.get('/currentBill', (req, res) => {
  Redis.get('bill_voting', (err, reply) => {
    res.send({
      data: reply,
    });
  });
});

router.get('/getResults', (req, res) => {
  Redis.get('bill_voting', (err, reply) => {
    res.send({
      data: {
        billId: reply,
        yes: Redis.get(`voting_${reply}_yes`),
        no: Redis.get(`voting_${reply}_no`),
        abstain: Redis.get(`voting_${reply}_abstain`),
      },
    });
  });
});

router.post('/startVoting', (req, res) => {
  Redis.write('bill_voting', String(req.body.id));
  Redis.write(`voting_${req.body.id}_yes`, 0);
  Redis.write(`voting_${req.body.id}_no`, 0);
  Redis.write(`voting_${req.body.id}_abstain`, 0);
  res.send({ data: 'Success' });
});

router.post('/stopVoting', (req, res) => {
  Redis.get('bill_voting', (err, reply) => {
    Redis.mget([`voting_${reply}_yes`, `voting_${reply}_no`, `voting_${reply}_abstain`], (err1, replies) => {
      res.send({
        data: {
          billId: reply,
          yes: replies[0],
          no: replies[1],
          abstain: replies[2],
        },
      });
    });
  });
  Redis.remove('bill_voting');
});

router.post('/vote', (req, res) => {
  const { bill, vote } = req.body;
  if (vote === 'YES') {
    Redis.incr(`voting_${bill}_yes`);
  } else if (vote === 'ABSTAIN') {
    Redis.incr(`voting_${bill}_abstain`);
  } else {
    Redis.incr(`voting_${bill}_no`);
  }
  res.send({ data: 'Success' });
});

module.exports = router;
