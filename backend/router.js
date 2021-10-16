const express = require('express')
const app = express()
const router = express.Router()
const Auth = require('./api/Controller/Auth')

router.all('/*', (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


router.post('/login',Auth.login)


module.exports = router