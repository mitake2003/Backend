import mongoose from "mongoose"
import { DB_NAME } from "../contants.js";
import dotenv from "dotenv"; // To Access env variable

dotenv.config({
    path: './.env'
})

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connection succesfull ", connectInstance.connection.host)
    } catch (error) {
        console.log("DB connection Failed ", error)
        process.exit(1);
    }
}

export default connectDB;