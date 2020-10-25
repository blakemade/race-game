const express = require('express');
const router = express.Router();
const pg = require('../../models/db');
// const express = require('express');

// const queryText = "SELECT cars.model, cars.owned FROM race_game.cars WHERE cars.owned='t' AND cars.id=$1 ORDER BY cars";

router.get('/', (req, res) => {
    // console.log('running mfg query');
    console.log("req params: ", req.params);

    // const { carId } = req.params;

    const queryText = "SELECT cars.id, cars.model FROM race_game.cars WHERE cars.owned='t' ORDER BY model" 

    pg.query(queryText, null, (err, qRes) => {

        if (err) {
            return console.error(err);
        } else {
            let data = qRes.rows;
            res.send(data);
        }
    })

});

router.get('/:carId', (req, res) => {
    // console.log('running mfg query');
    console.log("req params: ", req.params);

    const { carId } = req.params;

    if (carId) {

        const queryText = "SELECT cars.id, cars.model FROM race_game.cars WHERE cars.owned='t' AND cars.manufacturer_id=$1 ORDER BY model";

        pg.query(queryText, [req.params.carId], (err, qRes) => {

            if (err) {
                return console.error(err);
            } else {
                let data = qRes.rows;
                res.send(data);
            }
        })

    } else {

        const queryText = "SELECT cars.model FROM race_game.cars WHERE cars.owned='t' ORDER BY model";

        pg.query(queryText, null, (err, qRes) => {

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