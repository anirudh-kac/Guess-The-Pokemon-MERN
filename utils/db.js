const mongoose = require('mongoose')

const connectDB =()=>{
    console.log(process.env.DB_URL)
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to database");
    }).catch(()=>{
        console.log("Couldnt connect to database");
    })
    
}
module.exports = connectDB;