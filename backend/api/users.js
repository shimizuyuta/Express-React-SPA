const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
  console.log('/api/user')
  res.send(200)
})
module.exports = router