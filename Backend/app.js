import express from "express"
import {dbConnection} from "./database/dbConnection.js"
import dotenv, { config } from "dotenv"
import messageRoutes from "./routes/messageRoutes.js"
import cors from "cors";

const app=express();
dotenv.config({path:"./config/config.env"})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credentials:true
}))



app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use("/",(req,res)=>{
//     res.json({
//         success:true,
//     message:"U R ALL DONE NOW"
//     })
    
// })

app.use("/api/v1/message",messageRoutes);



dbConnection();
export default app;