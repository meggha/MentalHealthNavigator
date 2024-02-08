import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
},
{ timestamps: true }
);

export const Blog = mongoose.model('Blog', blogSchema);