require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.get("/",(req,resp)=>{
    resp.send({
        data:"get api called successfully"
    })
})

app.post("/post",(req,resp)=>{
    resp.send({
        data:"post api called successfully"
    })
})
app.delete("/delete",(req,resp)=>{
    resp.send({
        data:"delete api called successfully"
    })
})
app.put("/put",(req,resp)=>{
    resp.send({
        data:"put api called successfully"
    })
})

app.listen(port,()=>{
    console.log("Running")
})


