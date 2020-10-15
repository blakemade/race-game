const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

const queryText = `
SELECT
events.category_id,
events.group_id,
events.series_id,
events.event_number,
events.laps,
events.cup_pr
FROM
race_game.events
WHERE
events.car_1_id=215 OR
events.car_2_id=215 OR
events.car_3_id=215 OR
events.car_4_id=215 OR
events.car_5_id=215 OR
events.car_6_id=215 OR
events.car_7_id=215
ORDER BY
events.laps
`;



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