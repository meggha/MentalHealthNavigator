import express from "express";
const router = express.Router();
import { User } from "../models/user.js";
import { personal_info } from "../models/personal_info.js";
import mongoose from "mongoose";

router.post('/addBiodata', async (req, res) => {
  try {
    console.log(req.body);
    const {Name,Age,Gender,email}  = req.body;

    // Validation
    if (!Name || !Age || !Gender) {
      return res.status(400).json({ error: 'Please provide all fields' });
    }

    const existingUser = await User.findOne({ email });

    // Validation
    if (!existingUser) {
      return res.status(404).json({ error: 'Unable to find user' });
    }

    // Define session here
    const session = await mongoose.startSession();

    try {
        session.startTransaction();
      
        const newProfile = new personal_info({ Name, Age, Gender });
        await newProfile.save({ session });
      
        existingUser.personal_info.push(newProfile);
        await existingUser.save({ session });
      
        await session.commitTransaction();
        console.log('personal info saved!');
        res.status(201).json({ message: 'info saved' });
      } catch (error) {
        await session.abortTransaction();
        console.error(error);
        res.status(500).json({ message: 'Error saving personal info' });
      }      
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as personalinfoRouter };