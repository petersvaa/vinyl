import express from 'express';
var router = express.Router();
import con from '../services';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



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
  con.query('INSERT INTO records (artist, album, cover, description, price, hook) VALUES ?', [[values]], (err,results) => {
      if(err?.errno) res.status(409).json({message: 'Already exists'})
      res.json(results)
  })
})

export default router;
