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

    db.query('SELECT manufacturers.manufacturer_name, cars.model FROM race_game.manufacturers INNER JOIN race_game.cars ON cars.manufacturer_id = manufacturers.id;', null, (err, qRes1) => {
        if (err) {
            return next(err);
        }
        let counter = 0;
        let arr1 = [];

        while (counter < 20) {
            arr1.push(JSON.stringify(qRes1.rows[counter]));
            counter++;
        }

        let newArr1 = arr1.map(el => `<ul>${el}</ul>`)

        console.log('logging newArr from pgRoute: ', newArr1);

        // res.render('index', {
        //     title: arr, // JSON.stringify(res), //JSON.stringify(myRows),
        //     body: newArr,
        // });

        console.log('logging manufacturers from pgRoute: ', qRes1);

        // res.render('index', {
        //     title: getManufacturers(), // JSON.stringify(res), //JSON.stringify(myRows),
        //     body: 'Hey there...',
        //     // qRes: {'qRes': qRes }
        // });
        // // }
        // // connection.end();
        // //});

        // });

        db.query('SELECT manufacturers.manufacturer_name, cars.model FROM race_game.manufacturers INNER JOIN race_game.cars ON cars.manufacturer_id = manufacturers.id WHERE manufacturer_name = \'Audi\' AND cars.owned = \'t\';', null, (err, qRes2) => {

            res.render('index', {
                title: arr1, // JSON.stringify(res), //JSON.stringify(myRows),
                body: JSON.stringify(qRes2.rows)
            });
        });
    });
});

module.exports = router

