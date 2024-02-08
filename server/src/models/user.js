import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  blogs:[
    {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
  ],
  personal_info: [
    {
      type: mongoose.Types.ObjectId,
      ref: "personal_info",
    },
  ],
},
{ timestamps: true }
);

export const User = mongoose.model('User', userSchema);

