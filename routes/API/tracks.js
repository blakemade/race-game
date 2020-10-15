const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

const queryText = "SELECT tracks.track_name FROM race_game.tracks ORDER BY track_name";



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

module.exports = router