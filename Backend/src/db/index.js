import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connected successfully");
        console.log(connectionInstance.connection.host);
    }catch(error){
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;