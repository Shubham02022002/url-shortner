import mongoose from "mongoose"

const connectToMongDB = async () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/url-shortner").then(() => {
        console.log(`MongoDb connected!`);
    })
}


export default connectToMongDB;