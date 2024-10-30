import express,{ Request,Response } from "express";
const app = express();

const PORT = 3000;

app.get('/api',(req : Request, res : Response)=>{
res.send("vercel server is running")
})




app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})