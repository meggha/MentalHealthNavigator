import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Age: {
    type: Number,
  },
  Gender: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
},
{ timestamps: true }
);

export const personal_info = mongoose.model('personal_info', infoSchema);