import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

export default mongoose.model("post_datas", postSchema);
