const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

// const queryText = "SELECT cars.model, cars.owned FROM race_game.cars WHERE cars.owned='t' AND cars.id=$1 ORDER BY cars";



router.get('/:id', (req, res) => {
    // console.log('running mfg query');

    const { carId } = req.params;

    if (carId) {

        pg.query(queryText, [req.params.carId], (err, qRes) => {
            const queryText = "SELECT cars.model FROM race_game.cars WHERE cars.owned='t' AND cars.manufacturer_id=$1 ORDER BY cars";
            if (err) {
                return console.error(err);
            } else {
                let data = qRes.rows;
                res.send(data);
            }
        })

    } else {

        pg.query(queryText, null, (err, qRes) => {
            const queryText = "SELECT cars.model FROM race_game.cars WHERE cars.owned='t' ORDER BY cars";
            if (err) {
                return console.error(err);
            } else {
                let data = qRes.rows;
                res.send(data);
            }
        })
    }
});

module.exports = router;