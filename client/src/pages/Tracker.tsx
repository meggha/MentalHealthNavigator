import { Grid, Button, Typography } from "@mui/material";
//import {gsap} from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Tracker = () => {

  const trackerRef = useRef(null)
  let navigate = useNavigate();

  const handleClick = (e) =>{
    gsap.fromTo(trackerRef.current, {opacity: 1}, {opacity: 0, duration: 1})
    setTimeout(()=>{
      navigate('/new-habit')
    }, 1000)
  }

  useEffect(()=>{
    gsap.fromTo(trackerRef.current, {opacity: 0}, {opacity: 1, duration: 1})
  }, [])

  return (
    <>
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      ref={trackerRef}
      style={{ height: "80vh" }}
    >
      <Grid item padding="1.5rem" paddingBottom="2rem">
        <Button variant="outlined" onClick={handleClick}>
          <Typography variant="h6" style={{textTransform: 'none'}}>Get Started - Track a habit</Typography>
        </Button>
      </Grid>
    </Grid>
    </>
  );
};

export default Tracker;