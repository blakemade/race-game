var express = require('express');
var router = express.Router();
// const mysql = require('mysql');

var pg = require('../routes/pgRoute');
var users = require('../routes/users');
const apiMfg = require('../routes/API/mfg');
const apiCars = require('../routes/API/cars');
const apiTracks = require('../routes/API/tracks');
const apiLaps = require('../routes/API/laps');
const apiResults = require('../routes/API/results');

router.use('/', pg);
router.use('/users', users);
router.use('/api/manufacturers', apiMfg);
router.use('/api/cars', apiCars);
router.use('/api/tracks', apiTracks);
router.use('/api/laps', apiLaps);
router.use('/api/results', apiResults);

module.exports = router;
