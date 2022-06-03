const express=require("express")
const app= express()
const port= 2000|| process.env.PORT
const cors=require("cors")
app.use(cors)

app.listen(port,()=>console.log("server listening on port"+ port))

app.get("/", (req,res)=>{
    res.send("Hello World")
})