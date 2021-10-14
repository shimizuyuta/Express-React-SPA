const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')

const userRouter = require('./api/users')



app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/user', userRouter)

app.listen(port,()=>console.log('start server'))