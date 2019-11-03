var express = require('express');
var router = express.Router();


const mysql = require('mysql');
const dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {

  var myRows
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'race_game_test',
    //socketPath: '/tmp/mysql.sock'
  })
  
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  
  connection.query('SELECT * FROM manufacturers', function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows)
      myRows = rows
      res.render('index', { title: JSON.stringify(myRows)});
    }else{
      res.render('index', { title: 'Error'});
      console.log('Error while performing Query.')
    }
  })
  
  // res.render('index', { title: myRows});

});

module.exports = router;
