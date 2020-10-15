const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

const queryText = "SELECT cars.model, cars.owned FROM race_game.cars WHERE cars.owned='t' ORDER BY cars";



router.get('/', (req, res) => {
    // console.log('running mfg query');
    
    pg.query(queryText, null, (err, qRes) => {
        if (err) {
            return console.error(err);
        } else {
            let data = qRes.rows;
            res.send(data);
        }


    })
});

module.exports = router;