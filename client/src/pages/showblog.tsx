import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bgimg from '../img/signbg.png';

export const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  // get user blogs
  const getUserBlogs = async () => {
    try {
      const email = localStorage.getItem("userId");
      const { data } = await axios.get("http://localhost:3001/Blogdisplay", {
        params: { email },
      });

      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      const email = localStorage.getItem("userId");
      const { data } = await axios.delete(
        `http://localhost:3001/Blogdelete/${blogId}`,
        {
          data: { email },
        }
      );

      if (data?.success) {
        alert("Blog Deleted");
        navigate("/journaling");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (blogId) => {
    navigate(`/updateBlog/${blogId}`);
  };

  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <Card key={blog._id} style={{ marginBottom: "20px",backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover' }}>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Date: {new Date(blog.createdAt).toLocaleDateString()}
              </Card.Subtitle>
              <Card.Text>{blog.description}</Card.Text>
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => handleUpdate(blog._id)}
              >
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(blog._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>You Haven't Created a Blog</h1>
      )}
    </div>
  );
};