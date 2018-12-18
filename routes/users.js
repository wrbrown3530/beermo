let express = require('express');
let router = express.Router();
let knex = require('../knex')
let cors = require('cors')
// router.use(cors())

/* GET users listing. */
router.get('/', (req, res, next)=>{
  knex('users')
  .then(data=>{
    res.send(data)
  })
})

router.get('/:id', (req,res,next)=>{
  let id=req.params.id
  knex('users')
  .where('id',id)
  .then(data=>{
    res.send(data)
  })
})

router.post('/', (req,res,next)=>{
  knex('users')
  .insert(req.body)
  .returning(['first_name','last_name','email'])
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    console.log(err)
  })
})

router.patch('/:id', (req, res, next)=>{
  knex('users')
  .update(req.body)
  .where('id', req.params.id)
  .returning('*')
  .then(data=>{
    res.send(data)
  })
})

router.delete('/:id', (req, res, next)=>{
  knex('users')
  .where('id', req.params.id)
  .returning(['first_name','last_name'])
  .del()
  .then(data=>{
    res.send(data)
  })

})



module.exports = router;
