import express from 'express';
var router = express.Router();
import con from '../services';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/order/submit', function(req, res, next) {
  const values = [
    Math.floor(Date.now() / 1000),
    false,
  ]
  // need price
  con.query('INSERT INTO orders (created_timestamp, paid) VALUES ?', [[values]], (err, results) => {
    if(err) throw err;

    // make multiple items possible
    const orderId = results.insertId
    const itemValues = [
      req.body.items[0],
      orderId
    ]
    con.query('INSERT INTO cart_items(record_id, order_id) VALUES ?', [[itemValues]], (err, results) => {
      if(err) throw err;

      res.send('OK')
    })
  })
})

router.get('/order', function (req,res){
  con.query('SELECT * FROM orders(id, created_timestamp)', (err, results) => {
    if (err) throw err;

    res.json(results)
  })
})

router.post('/admin/records/submit', (req,res) => {
  const values = [
      req.body.artist,
      req.body.album,
      req.body.cover,
      req.body.description,
      req.body.price,
      req.body.hook
  ]
  console.log(values[5])
  // con.query('INSERT INTO records (artist, album, cover, description, price, hook) VALUES ?', [[values]], (err,results) => {
  //     if(err?.errno) res.status(409).json({message: 'Already exists'})
  //     res.json(results)
  // })
})

export default router;
