import express from "express";
import connectToMongDB from "./connection.js";
import dotenv from "dotenv";
import router from "./routes/url.routes.js"
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT;
connectToMongDB();

app.use("/", router)


app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
