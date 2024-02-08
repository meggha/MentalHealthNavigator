import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Profile = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [reviews, setreviews] = useState("");
  const [info, setInfo] = useState([]);
  const email = localStorage.getItem("userId");
  const handleGenderChange = (e) => {
    console.log("Selected value:", e.target.value);
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addBiodata", { Name, Age, Gender, email })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const {data} = await axios.post("http://localhost:3001/reviews", { reviews })
      if(data.success){ 
        alert('Successfully Saved Review');
    }
  };
  
  const getUserInfo = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Infodisplay", {
        params: { email },
      });
      console.log(response.data);
      const data = response.data;
      if (data && data.success) {
        setInfo(data.userInfo.personal_info);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchPositiveQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching positive quote:', error);
    }
  };

  useEffect(() => {
    fetchPositiveQuote();
  }, []);


  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div style={{backgroundImage:"linear-gradient(to right,#E3FDFD,#CBF1F5,#A6E3E9,#71C9CE)"}}>
      <Container>
        <Row>
          <Col>
            {/* Box 1 */}
                  {info && info.length > 0 ? (
                    info.map((userInfo, index) => (
                      <Card
                      className="row border p-3 bg-white shadow box-area"
                      style={{ maxWidth: "1000px", minHeight: "70vh",margin: "25px 0"}}
                    >
                      <Card.Header className="d-flex justify-content-center align-items-center ">
                        <h2>Profile</h2>
                      </Card.Header>
                      <Card.Body>
                    <div
                  className="row p-3 bg-blue"
                  style={{ maxWidth: "1000px", minHeight: "40vh" }}
                    >
                        <h4>Name:</h4>
                        {userInfo.Name}
                        <br />
                        <br />
                        <h4>Age: </h4>
                        {userInfo.Age}
                        <br />
                        <br />
                        <h4>Gender: </h4>
                        {userInfo.Gender}
                        <br />
                      </div>
                       </Card.Body>
                       </Card>
                    ))
                    ):(
                      <Card
                      className="row border p-3 bg-white shadow box-area"
                      style={{ maxWidth: "1000px", minHeight: "70vh",margin: "25px 0" }}
                    >
                      <Card.Header className="d-flex justify-content-center align-items-center ">
                        <h2>Profile</h2>
                      </Card.Header>
               <Card.Body>
               <strong>You Haven't Created a Profile</strong>
                <Form onSubmit={handleSubmit} style={{ minHeight: "20vh" }}>
                  <div
                    className="row p-3 bg-white"
                    style={{ maxWidth: "1000px", minHeight: "40vh" }}
                  >
                    <h3>Enter Profile :</h3>
                    <div>
                      <label style={{ padding: "10px" }}>Name:</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                    <label style={{ padding: "10px" }}>Age:</label>
                      <input
                        type="number"
                        placeholder="Your Age"
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ padding: "10px" }}>Gender:</label>
                      <select
                        onChange={handleGenderChange}
                        value={Gender}
                        required
                      >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <Button type="submit" style={{ maxHeight: "auto" }}>
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
              </Card>
              )}
          </Col>
          <Col>
            {/* Box 2 */}
            <Row>
              <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0"}}>
                <Card.Body>
                <div>
                    <h4>Positive Quote:</h4>
                    <p>{quote}</p>
                    <p>- {author}</p>
                  </div>
                </Card.Body>
              </Card>
            </Row>
            {/* Box 3 */}
            <Row>
              <Card>
                <Card.Body>
                  <Form onSubmit={handleSubmit1} style={{ minHeight: "50vh" }}>
                    <div>
                      <Form.Label>Write reviews</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="review..."
                        style={{ height: "300px" }}
                        required
                        value={reviews}
                        onChange={(e) => setreviews(e.target.value)}
                      />
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                      <Button type="submit" style={{ maxHeight: "5vh"}}>
                        Submit
                      </Button>
                      </div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};