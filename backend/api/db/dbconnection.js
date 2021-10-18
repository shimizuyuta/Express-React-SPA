'uses strict'
const mongoose = require('mongoose')
require('dotenv').config();
const url = process.env.MONGO_DB_CONNECTION_URL

module.exports = async() =>{
    try{
      const conn = await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true,
      })
      return conn
      
    }catch(err){
       console.log(err,'err2222222222222222')
       process.exit(1)
    }
}

