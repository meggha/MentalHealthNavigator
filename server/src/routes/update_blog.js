import express from "express";
const router = express.Router();
import { Blog } from "../models/blog.js";

router.put('/updateBlog/:id', async (req, res) => {
    try {
      const blogId = req.params.id;
      const { title, description, email } = req.body;
      //console.log("blog id:",blogId);
      //console.log(req.body);
      const blog = await Blog.findByIdAndUpdate(
        { _id: blogId },
        { ...req.body },
        { new: true }
      ).populate("user").exec();
      
      if (!blog) {
        return res.status(404).send({
          success: false,
          message: "Blog not found.",
        });
      }  

      return res.status(200).send({
        success: true,
        message: "Blog Updated!",
        blog,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error WHile Updating Blog",
        error,
      });
    }
  });

export { router as updateRouter };