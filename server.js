const express = require('express')

app = express();

app.get('/',(req,res)=>{
    res.send("API is running")
})



const port = 5000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})