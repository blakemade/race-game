// const mysql = require('mysql');
// const dotenv = require('dotenv').config();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   database: 'race_game_test',
//   //socketPath: '/tmp/mysql.sock'
// })

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM manufacturers', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows)
//   else
//     console.log('Error while performing Query.')
// })

// connection.end()

// this should just import and launch app

const app = require('./app.js');
console.log('maybe launching server?');
// console.log('process.env: ', process.env);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});