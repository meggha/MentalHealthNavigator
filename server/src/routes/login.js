import express from "express";
const router = express.Router();
import { User } from "../models/user.js";
import  bcrypt from 'bcrypt';


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).send({
        success: true,
        message: "Login successfully",
        user, }); }
        else{
         // console.log("nope");
          return res.status(401).send({
          success: false,
          message: "Invalid username or password", });
        }
  } catch (error) {
    console.log(error)
  }
});

export { router as loginRouter };
