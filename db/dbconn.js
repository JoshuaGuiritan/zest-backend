import mongoose from "mongoose";

const mongourl = process.env.MONGO_URL;

const dbConnect = async () => {
  try {
    const res = await mongoose.connect(mongourl);
    console.log("Database Connected!");
  } catch (err) {
    console.log("Database not found!");
  }
};

export default dbConnect;
