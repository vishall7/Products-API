import { config } from "dotenv"
config()
import express from "express"
import router from "./routes/products.mjs"
import connectDB from "./db/connect.mjs"

const port = process.env.PORT || 3000
const app = express()

app.use("/api/products",router)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(port,()=>{
            console.log(`server is connected to ${port}`)
        })
    } catch (error) {
       console.log(error) 
    }
}
start()