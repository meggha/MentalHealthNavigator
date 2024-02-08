import express from "express";
const router = express.Router();
import { User } from "../models/user.js";


router.get('/Blogdisplay', async (req, res) => {
  try {
    const { email } = req.query; // Use req.query for GET requests
    const userBlog = await User.findOne({ email }).populate("blogs");

    if (!userBlog) {
      return res.status(404).json({
        success: false,
        message: "User not found or has no blogs",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User blogs fetched successfully",
      userBlog,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error fetching user blogs",
      error: error.message,
    });
  }
});

export { router as blogDisplayRouter };