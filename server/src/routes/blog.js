import express from "express";
const router = express.Router();
import { User } from "../models/user.js";
import { Blog } from "../models/blog.js";
import mongoose from "mongoose";

router.post('/createBlog', async (req, res) => {
  try {
    const { title, description, email } = req.body;

    // Validation
    if (!title || !description || !email) {
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
      const newBlog = new Blog({ title, description, email });
      await newBlog.save({ session });
      existingUser.blogs.push(newBlog);
      await existingUser.save({ session });
      await session.commitTransaction();
      console.log('Blog Created!');
      res.status(201).send({ 
        success: true,
        message: 'Blog Created!' });
    } catch (error) {
      console.log('error: ' + error);  
      await session.abortTransaction();
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as blogRouter };
