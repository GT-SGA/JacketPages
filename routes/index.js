const express = require('express');

const router = express.Router();

// Load Routes
const bills = require('./bills');
const budgets = require('./budgets');
const users = require('./users');
const voting = require('./voting');
const sgaPeople = require('./sgaPeople');
const organizations = require('./organizations');

// Use Routes
router.use('/bills', bills);
router.use('/budgets', budgets);
router.use('/users', users);
router.use('/voting', voting);
router.use('/sgaPeople', sgaPeople);
router.use('/organizations', organizations);

module.exports = router;
