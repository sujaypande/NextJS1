import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('MongoDB connected successfully')
        })
    }catch(error) {
        console.log("MongoDB connection error. Please make sure MongoDb is running. " + error);
        console.log(error);
    }
}