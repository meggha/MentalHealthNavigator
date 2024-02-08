import express from "express";
const router = express.Router();
import { User } from "../models/user.js";
import  bcrypt from 'bcrypt';
//const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await User.findOne({ email });
  //const userPassword = await User.findOne({ email,password });
  if (userEmail) {
    res.send({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password:hashedPassword,
  });
  try {
    //const user = await User.findOne({ email });
    if(newUser.save()){
      res.status(201).send({ 
      success: true,
      message: 'User created successfully' });
    }
    res.status(500).send({ 
      success: false,
      message: 'Error saving user to the database' });
  } catch (error) {
    console.error(error);
  }
});

export { router as userRouter };

