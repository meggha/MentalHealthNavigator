import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviews: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

export const review = mongoose.model('review', reviewSchema);