const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

const queryText = `
SELECT
*
FROM
race_game.events
WHERE
(events.car_1_id=$1 OR
events.car_2_id=$1 OR
events.car_3_id=$1 OR
events.car_4_id=$1 OR
events.car_5_id=$1 OR
events.car_6_id=$1 OR
events.car_7_id=$1)
AND
events.event_type_id=4
AND
events.locked='f'
AND
(events.cup_pr< (
    SELECT pr FROM race_game.cars WHERE cars.id=$1
) OR
events.cup_pr IS null)    
ORDER BY
events.laps
`;


router.get('/', (req, res) => {
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