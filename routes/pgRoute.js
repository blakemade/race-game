const express = require('express');
const router = express.Router();
const db = require('../models/db')
// const getManufacturers = require('../models/db').getManufacturers;

// console.log('logging qRes from pgRoute: ', toString(qRes), qRes, JSON.stringify(qRes));

// // comment out
// // import 'bootstrap/dist/css/bootstrap.css';

// var $ = require('jquery');

// // comment out
// // window.$ = $;
// // require('bootstrap');

// const mysql = require('mysql');
// const dotenv = require('dotenv').config();

// /* GET home page. */



////


// commenting this out to test importing pgModel
// const { Client } = require('pg')

// console.log("logging process.env.DATABASE_URL: ", process.env.DATABASE_URL);



router.get('/', (req, res, next) => {


    // commenting out to test importing pgModel
    // let myRows = [];

    // const connection = new Client({
    //     connectionString: process.env.DATABASE_URL,
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // });

    // connection.connect();

    // console.log('connected to pg');

    // connection.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, pgRes) => {
    //     if (err) {
    //         console.log(err);
    //         throw err;
    //     } else {
    //         // for (let row of res.rows) {
    //         //     console.log(JSON.stringify(row));
    //         // }

    //         myRows = Array.from(pgRes.rows);

    //         if (myRows != undefined) {
    //             console.log('myRows is defined here');
    //             console.log('typeof(myRows) = '), typeof(myRows).toString();
    //             console.log('logging myRows inside query block', myRows);
    //         }

    // let manufacturers = 

    db.query('SELECT manufacturers.manufacturer_name, cars.model FROM race_game.manufacturers INNER JOIN race_game.cars ON cars.manufacturer_id = manufacturers.id;', null, (err, qRes) => {
        if (err) {
            return next(err);
        }
        res.render('index', {
            title: JSON.stringify(qRes.rows), // JSON.stringify(res), //JSON.stringify(myRows),
            body: 'Hey there...',
        });

        console.log('logging manufacturers from pgRoute: ', qRes);

        // res.render('index', {
        //     title: getManufacturers(), // JSON.stringify(res), //JSON.stringify(myRows),
        //     body: 'Hey there...',
        //     // qRes: {'qRes': qRes }
        // });
        // // }
        // // connection.end();
        // //});
    });
});

module.exports = router