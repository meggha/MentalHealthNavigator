import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bgimg from '../img/journal1.png';

export const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const email = localStorage.getItem("userId");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3001/createBlog", { title, description, email });
      if (data?.success) {
        alert("Blog Saved!");
        navigate("/showblog");
      }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
        }}
      >
        <Container
          className=" d-flex justify-content-center align-items-center "
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <Card className="row border rounded-5 p-3 shadow box-area color" style={{ backgroundColor: '#E8CEB6' }}>
              <Card.Body>
                <p className="text-center mb-4">
                  <h2 style={{ color: '#57422F' }}>Create your own journal</h2>
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="title">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      style={{ backgroundColor: '#E8CEB6' }}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="description">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      //style={{ backgroundColor: '#E8CEB6' }}
                      style={{ height: "100px" , backgroundColor: '#E8CEB6' }}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100 mt-3" style={{ backgroundColor: '#D6CEC6' }}>
                    Save
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <div className="w-100 text-center mt-2">
                   <Link to="/showblog" >Journal Entries</Link>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

