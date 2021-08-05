const express = require('express')
const dotenv = require('dotenv').config()

const pokeControllers = require('./controllers/pokeControllers')
app = express();

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use('/pokemon',pokeControllers)



const port = 5000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})