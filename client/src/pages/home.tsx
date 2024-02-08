import React from 'react';
import {Container} from "react-bootstrap";
import img1 from '../img/hm1.png';
import img2 from '../img/hm2.png';
import img3 from '../img/hm3.png';
import img from '../img/11.png';

export const Home = () =>{
    return(
        <div style={{ //backgroundColor: 'lightblue',
            minHeight: "100vh", 
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
         }}>
        <>
        {/* <div className="jumbotron text-center"
        style={{  minHeight: "90vh",  
       // padding: "30px", 
        border: "1px solid white", }}>
            <Container className=" d-flex  align-items-center " style={{  minHeight: "50vh" }}>
            <div><h1 style={{color:"white", fontSize:"50px",fontWeight:"10px"}}>Mental Health Support</h1></div>
            </Container>
            <Container className=" d-flex align-items-center ">
            <p className="lead">Your mental well-being is important. Find resources and support here.</p>
            </Container>
        </div> */}
        
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={img1}  className="card-img-top" style={{ height: '300px' }} alt="Understanding Mental Health Image" />
                        <div className="card-body">
                            <h5 className="card-title">Understanding Mental Health</h5>
                            <p className="card-text">Learn about different mental health conditions and how they can affect individuals.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={img2}  className="card-img-top" style={{ height: '300px' }} alt="Find Support Groups Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Find Support Groups</h5>
                            <p className="card-text">Connect with others who may be experiencing similar challenges. Support is crucial.</p>
                            <a href="#" className="btn btn-primary">Explore Groups</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={img3}  className="card-img-top" style={{ height: '300px' }} alt="Professional Help Image"/>
                        <div className="card-body">
                            <h5 className="card-title">Professional Help</h5>
                            <p className="card-text">Seek help from mental health professionals. Find therapists and counselors near you.</p>
                            <a href="#" className="btn btn-primary">Find a Professional</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
    </div>
)};