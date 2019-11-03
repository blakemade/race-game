const mysql = require('mysql');
const dotenv = require('dotenv').config();

getConn = function() {
    var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'race_game_test',
    //socketPath: '/tmp/mysql.sock'
  });

  conn.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });
  return conn;
};


getManufacturers = function(onSuccess){
  conn = getConn();
  connection.query('SELECT * FROM manufacturers', function(err, rows, fields) {
    if (err)
      console.log('Error while performing Query.')
      return
    onSuccess(rows,fields);
    
});
connection.end()
};



