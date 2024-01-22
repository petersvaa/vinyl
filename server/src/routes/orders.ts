import express from 'express';
var router = express.Router();
import con from '../services';


router.get('/', function (req,res){
  con.query('SELECT * FROM orders', (err, results) => {
    if (err) throw err;

    res.json(results)
  })
})

router.post('/paid', function(req,res) {
  const values = [
    req.body.paid,
    req.body.id
  ]
  con.query('UPDATE orders SET paid = ? WHERE id = ?;', values, (err, results) => {
    if(err) throw err;

    res.json({message: 'OK'}).status(200);
  })
})

router.post('/delete', function(req,res){
  const values = [
    req.body.id
  ]
  con.query('DELETE FROM cart_items WHERE id = ?;', [[values]], (err, results) => {
    if(err) throw err;
    con.query('DELETE FROM orders WHERE id = ?;', [[values]], (err, results) => {
      if(err) throw err;
  
      res.json({message: 'OK'}).status(200)
    })
  })
})

router.post('/submit', function(req, res, next) {
    const values = [
      Math.floor(Date.now() / 1000),
      false,
      req.body.name,
      req.body.surname,
      req.body.email,
      req.body.phone,
      req.body.street,
      req.body.city,
      req.body.postalCode,
    ]
    // need price
    con.query('INSERT INTO orders (created_timestamp, paid, name, surname, email, phone, street, city, postal_code) VALUES ?', [[values]], (err, results) => {
      if(err) throw err;
  
      // make multiple items possible
      const orderId = results.insertId
      const itemValues = [
        req.body.items[0],
        orderId
      ]
      con.query('INSERT INTO cart_items(record_id, order_id) VALUES ?', [[itemValues]], (err, results) => {
        if(err) throw err;
        
        res.json({message: 'OK', id:orderId}).status(201)
      })
    })
  })
  
router.get('/:id', function(req,res) {
  con.query('SELECT * FROM orders WHERE id = ?', [[[req.params.id]]], (err, results) => {
    if(err) throw err;

    let order = results[0]

    con.query('SELECT records.id, records.artist, records.album, records.hook, records.price FROM cart_items INNER JOIN records ON cart_items.record_id = records.id WHERE order_id = ?;', [[[req.params.id]]], (err, results) => {
      if(err) throw err;

      order['items'] = results

      res.json(order).status(200)
    })
  })
})


export default router;