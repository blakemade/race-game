const express = require('express');
const router = express.Router();

// // comment out
// // import 'bootstrap/dist/css/bootstrap.css';

// var $ = require('jquery');

// // comment out
// // window.$ = $;
// // require('bootstrap');

// const mysql = require('mysql');
// const dotenv = require('dotenv').config();

// /* GET home page. */

const { Client } = require('pg')

console.log("logging process.env.DATABASE_URL: ", process.env.DATABASE_URL);



router.get('/', function (req, res) {

    let myRows;

    const connection = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    connection.connect();

    console.log('connected to pg');

    connection.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        if (err) {
            console.log(err);
            throw err;
        } else {
            // for (let row of res.rows) {
            //     console.log(JSON.stringify(row));
            // }

            myRows = Object.assign({}, res.rows);

            
        }

        connection.end();
    })

    console.log('myRows = ', JSON.stringify(myRows));

    res.render('index', {
        title: JSON.stringify(myRows).toString(),
        body: 'Hey there...'
    });



});

module.exports = router;