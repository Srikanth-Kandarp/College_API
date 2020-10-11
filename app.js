const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Still Have to Work on it ")
})

app.listen(8000,()=> {
    console.log("Server Started")
})


