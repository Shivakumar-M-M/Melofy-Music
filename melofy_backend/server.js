import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import dotenv from 'dotenv';
import albumRouter from './src/routes/albumRoute.js';
dotenv.config();


//  app config

const app=express()
const port=process.env.PORT| 4000
connectDB();
connectCloudinary();
//middleware

app.use(express.json());
app.use(cors());


app.use("/api/song",songRouter)
app.use('/api/album',albumRouter)

//initilazie route

app.get('/api/song',(req,res)=>
{
    res.send("api working")
})



app.listen(port,()=>
{
    console.log("execute");

})