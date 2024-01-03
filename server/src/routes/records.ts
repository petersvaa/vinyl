import express from 'express';
import con from '../services';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    con.query('SELECT * FROM records', (err,results) => {
        if(err) res.status(500);
        res.json(results)
    })
});

router.get('/:hook', (req, res) => {
    let hook = req.params.hook
    con.query('SELECT * FROM records WHERE hook = ?', [[hook]], (err, results) => {
        if(err) res.status(500);
        res.json(results[0])
    });
})




export default router;
