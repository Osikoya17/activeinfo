import express,{Request,Response,NextFunction,Application} from "express"
import {Server} from "http"
import {PORT,MONGO_URI} from "./config/env"
import {router} from "./routes/Routes"
import mongoose from "mongoose"
import cors from  "cors"
mongoose.connect(`${MONGO_URI}`,{},(err)=>{
    if(err) console.log("Please Connect to a WIFI");
    else console.log("Database Connected"); 
})
const app:Application = express()
app.use(express.json())
const corsoption ={
    origin:"*"
}
app.use(cors(corsoption))

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send("Hello world")
})
app.use(router)

const server:Server = app.listen(PORT || 4000 ,()=>console.log(`App is running on port ${PORT}`))