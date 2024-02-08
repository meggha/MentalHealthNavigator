import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "axios";
import { Link , useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import img from '../img/11.png';

export const UpdateUserBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const email = localStorage.getItem("userId");
  const navigate = useNavigate();
  const { blogId } = useParams();
  const handleSubmit = async (e) => {
  e.preventDefault();
   // axios
   //   .put(`http://localhost:3001/updateBlog/${blogId}`, { title, description, email })
    //  .then((result) => console.log(result))
    //  .catch((e) => console.log(e));
    try {
      const { data } = await axios.put(`http://localhost:3001/updateBlog/${blogId}`, { title, description, email });
  
      if (data?.success) {
        alert("Blog Updated");
        navigate("/showblog")
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div
        style={{
          backgroundSize: "cover", backgroundImage: `url(${img})`
        }}
      >
        <Container
          className=" d-flex justify-content-center align-items-center "
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <Card className="row border rounded-5 p-3 bg-white shadow box-area">
              <Card.Body>
                <p className="text-center mb-4">
                  <h2>Update journal</h2>
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="title">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="New Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="description">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="New Description"
                      style={{ height: "100px" }}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100 mt-3">
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};
