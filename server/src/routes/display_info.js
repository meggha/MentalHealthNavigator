import express from "express";
const router = express.Router();
import { User } from "../models/user.js";


router.get('/Infodisplay', async (req, res) => {
  try {
    const { email } = req.query; // Use req.query for GET requests
    const userInfo = await User.findOne({ email }).populate("personal_info");

    if (!userInfo) {
      return res.status(404).json({
        success: false,
        message: "User not found or has no info",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User info fetched successfully",
      userInfo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error fetching user info",
      error: error.message,
    });
  }
});

export { router as infoDisplayRouter };