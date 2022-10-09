const mongoose = require('mongoose')

const connectDB = async ()=>{
    console.log(process.env.DB_URL)
    
    await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
 
    console.log("Connected to database");  
}

exports = connectDB;
