const dotenv = require('dotenv').config();
const { Client, Pool } = require('pg');

let client;
let pool;

switch (process.env.NODE_ENV) {
    case 'production': {
        console.log('logging environment: ', process.env.NODE_ENV);
        pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }
    break;
    case 'development': {
        console.log('logging environment: ', process.env.NODE_ENV);
        client = new Client();
        client.connect(err => {
            if (err) {
              console.error('connection error', err.stack)
            } else {
              console.log(`connected to postgres as:
              user: ${process.env.PGUSER}
              database: ${process.env.PGDATABASE}
              password: ${process.env.PGPASSWORD}
              `);
            }
        }); 
    }
    break;
    default: {
        console.log('environment is not defined');
    }
}

// if (process.env.NODE_ENV == 'production') {
//     console.log('logging environment: ', process.env.NODE_ENV);
//     client = new Client({
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false
//         }
//     });
// } else if (process.env.NODE_ENV == 'development') {
//     console.log('logging environment: ', process.env.NODE_ENV);
//     client = new Client();
// }

// console.log('logging process.env.NODE_ENV: ', process.env.NODE_ENV);

// console.log('logging process.env.DB_PASSWORD: ', process.env.DB_PASSWORD);

//client.connect();

// let result; 

// const defaultQuery = () => {
//     client.connect();
//     client.query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .then(qRes => {
        
//         return qRes;
//         // if (err) throw err;
//         // result = qRes;
        
//         // console.log('logging qRes from client.query in pgModel: \n \n \n', JSON.stringify(qRes), qRes);
//         // module.exports = qRes;


//         // client.end();
//     })
//     .then(client.end())
//     .catch(err => console.error(err.stack))

// };
//     //.then(client.end());

// // client.connect();

// // client.query('SELECT NOW() as now;')
// //     .then(res => console.log(res.rows[0]))
// //     //.then(client.end())
// //     .catch(e => console.error(e.stack));


// const getManufacturers = async () => {
//     try {
//         client.connect();
//         let result = await client.query('SELECT * FROM race_game.manufacturers;');
//         console.log(result);
//         client.end();
//         return result;
//     }
//     catch {
//         console.log('there was an error');
//     }
// }

// getManufacturers();

module.exports = {
    // getManufacturers : getManufacturers,
    // defaultQuery : defaultQuery,
    query: (text, params, callback) => {
        if (pool) {
            pool.query(text, params, callback);
        }
        if (client) {
            client.query(text, params, callback);
        }
    }
}