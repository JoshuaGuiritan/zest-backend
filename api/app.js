import express from "express";
import router from "../routes/route.js";
import dbConnect from "../db/dbconn.js";
import serverless from "serverless-http";
import cors from "cors";

dbConnect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

export default serverless(app);

