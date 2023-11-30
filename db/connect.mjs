import mongoose from "mongoose";

const connectDB = (uri)=>{
    console.log(`connected`)
    return mongoose.connect(uri)
}

export default connectDB