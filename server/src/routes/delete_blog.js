import express from "express";
const router = express.Router();
import { Blog } from "../models/blog.js";

router.delete('/Blogdelete/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const email = req.body.email; // Access userId from the request body

    // Validate if both blogId and userId are present
    if (!blogId || !email) {
      return res.status(400).send({
        success: false,
        message: "Both 'blogId' and 'userId' parameters are required in the request.",
      });
    }
    const blog = await Blog.findOneAndDelete({ _id: blogId }).populate("user").exec();
    console.log("Found blog:", blog);

    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found.",
      });
    }
    
    
    return res.status(200).send({
      success: true,
      message: "Blog Deleted!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export { router as deleteRouter };