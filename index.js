import express from "express"
const app = express();
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendfile("google.html")
})
app.listen(8000,()=>{
    console.log("Server Started");
})