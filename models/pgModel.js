const dotenv = require('dotenv').config();
const { Client } = require('pg');

// Not using this module/file, I don't think...

let client;

if (process.env.NODE_ENV == 'production') {
    console.log('logging environment: ', process.env.NODE_ENV);
    client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else if (process.env.NODE_ENV == 'development') {
    console.log('logging environment: ', process.env.NODE_ENV);
    client = new Client();
}

// console.log('logging process.env.NODE_ENV: ', process.env.NODE_ENV);

// console.log('logging process.env.DB_PASSWORD: ', process.env.DB_PASSWORD);

client.connect();

console.log(`connected to postgres as user: ${process.env.PGUSER}
                database: ${process.env.PGDATABASE}
                password: ${process.env.PGPASSWORD}
                `);

// let result; 

client.query('SELECT table_schema,table_name FROM information_schema.tables;')
    .then((qRes) => {
        // if (err) throw err;
        // result = qRes;
        
        // console.log('logging qRes from client.query in pgModel: \n \n \n', JSON.stringify(qRes), qRes);
        module.exports = qRes;
        client.end();

        // return qRes;

    })
    
    .catch(err => console.error(err.stack))
    //.then(client.end());

// client.connect();

// client.query('SELECT NOW() as now;')
//     .then(res => console.log(res.rows[0]))
//     //.then(client.end())
//     .catch(e => console.error(e.stack));


