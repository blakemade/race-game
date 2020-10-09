var express = require('express');
var router = express.Router();
// const mysql = require('mysql');

var pg = require('../routes/pgRoute');
var users = require('../routes/users');
const apiMfg = require('../routes/API/mfg');

router.use('/', pg);
router.use('/users', users);
router.use('/api/manufacturers', apiMfg)


module.exports = router;
