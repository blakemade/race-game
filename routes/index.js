var express = require('express');
var router = express.Router();
// const mysql = require('mysql');

var pg = require('../routes/pgRoute');
var users = require('../routes/users');
const apiMfg = require('../routes/API/mfg');
const apiCars = require('../routes/API/cars');

router.use('/', pg);
router.use('/users', users);
router.use('/api/manufacturers', apiMfg);
router.use('/api/cars', apiCars);

module.exports = router;
