import express from "express";
import router from "../routes/route.js";
import dbConnect from "../db/dbconn.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

await dbConnect();

app.use("/api", router);
