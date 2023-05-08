import express from "express";
import * as http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import * as mongoose from "mongoose";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is listening on port http://127.0.0.1:3000");
});

(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/typescript_api");
    console.log("Connected to MongoDB");
})();


