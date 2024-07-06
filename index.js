const express=require('express')

const app=express();

const PORT=5000

app.get("/",(req,res)=>{
    res.send("SERVER 123 IS RUNNING")
})

app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server is listening on port ${PORT}`);
})
