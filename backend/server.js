const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/',(req,res)=>res.send(200))

app.listen(port,()=>console.log('start server'))