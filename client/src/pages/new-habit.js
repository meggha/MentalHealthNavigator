import {
    Grid,
    Button,
    Typography,
    TextField,
    ButtonGroup,
  } from "@mui/material";
  import theme from "../ui/Theme";
  import React from "react";
  import Fab from "@mui/material/Fab";
  import { styled } from "@mui/system";
  import { useState } from "react";
  import MobileDatePicker from "@mui/lab/MobileDatePicker";
  
  const StyledRoundButton = styled(Fab)(
    ({ theme, colorCode, overrideMarginRight }) => ({
      backgroundColor: colorCode ? colorCode : theme.palette.common.red,
      "&.Mui-selected": {
        backgroundColor: colorCode
          ? colorCode + "BB"
          : theme.palette.common.darkRed,
      },
      "&:focused": {
        backgroundColor: colorCode
          ? colorCode + "BB"
          : theme.palette.common.darkRed,
      },
      "&:hover": {
        backgroundColor: colorCode
          ? colorCode + "BB"
          : theme.palette.common.darkRed,
      },
      marginRight: "2rem",
      [theme.breakpoints.down("md")]: {
        marginRight: overrideMarginRight ? overrideMarginRight : "1.5rem",
      },
    })
  );
  
  const BGButton = styled(Button)(({ theme }) => ({
    //yet to be filled
    textTransform: "none",
  }));
  
export const Habit = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [name, setName] = useState("");
    const [selectedDay, setSelectedDay] = useState(-1);
    const [weekday, setWeekday] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
  
    const todayDate = new Date();
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    //todayDate.setFullYear(todayDate.getFullYear()+1)
  
    const [endDate, endDateChange] = useState(todayDate);
  
    const handleClick = (e, colorCode) => {
      console.log(colorCode);
      setSelectedColor(colorCode);
    };
  
    const handleSubmit = () => {
      const payload = {
        name: name,
        selectedColor: selectedColor,
        startDate: selectedStartDate,
        endDate: endDate,
        frequency: weekday,
      };
  
      console.log(payload);
    };
  
    return (
        <>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        direction="column"
      >
        <Grid item padding="1.5rem" paddingBottom="2rem">
          <Typography
            variant="h5"
            style={{ color: theme.palette.common.darkRed, textTransform: "none" }}
          >
            Track a new habit
          </Typography>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg="4" md="5" sm="8" xs="10">
            <Grid container direction="column">
              {/* <form> */}
              <Grid item>
                <TextField
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  style={{ width: "90%" }}
                  label="Name"
                ></TextField>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">Color</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="100%">
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#ca3d21");
                    }}
                    colorCode="#ca3d21"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#e48922");
                    }}
                    colorCode="#e48922"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#f4c00e");
                    }}
                    colorCode="#f4c00e"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#54a54d");
                    }}
                    colorCode="#54a54d"
                    size="small"
                    color="primary"
                  >
                    {" "}
                  </StyledRoundButton>
                  <StyledRoundButton
                    onClick={(e) => {
                      handleClick(e, "#4998de");
                    }}
                    colorCode="#4998de"
                    size="small"
                    color="primary"
                    overrideMarginRight="0rem"
                  >
                    {" "}
                  </StyledRoundButton>
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">Start</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="100%">
                  <BGButton
                    variant={selectedDay === 0 ? "contained" : "outlined"}
                    onClick={() => {
                      setSelectedStartDate(new Date());
                      setSelectedDay(0);
                    }}
                  >
                    Today
                  </BGButton>
                  <BGButton
                    variant={selectedDay === 1 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setDate(date.getDate() + 1);
                      setSelectedStartDate(date);
                      setSelectedDay(1);
                    }}
                  >
                    Tomorrow
                  </BGButton>
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">Duration</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup width="80%">
                  <BGButton
                    variant={selectedDuration === 1 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setMonth(date.getMonth() + 1);
                      endDateChange(date);
                      setSelectedDuration(1);
                    }}
                  >
                    1 Month
                  </BGButton>
                  <BGButton
                    variant={selectedDuration === 2 ? "contained" : "outlined"}
                    onClick={() => {
                      let date = new Date();
                      date.setFullYear(date.getFullYear() + 1);
                      endDateChange(date);
                      setSelectedDuration(2);
                    }}
                  >
                    1 Year
                  </BGButton>
                  <MobileDatePicker
                    open={isOpen}
                    format="d MMM yyyy"
                    minDate={tomorrowDate}
                    onOpen={() => setIsOpen(true)}
                    onClose={() => setIsOpen(false)}
                    value={endDate}
                    onChange={endDateChange}
                    renderInput={(props) => {
                      if (props.fullWidth) {
                        return <TextField {...props} />;
                      }
                      return (
                        <BGButton
                          {...props}
                          variant={
                            selectedDuration === 3 ? "contained" : "outlined"
                          }
                          onClick={() => {
                            setSelectedDuration(3);
                            setIsOpen(true);
                          }}
                        >
                          Custom
                        </BGButton>
                      );
                    }}
                  />
                </ButtonGroup>
              </Grid>
              <Grid item marginTop="1rem">
                <Typography variant="body2">When</Typography>
              </Grid>
              <Grid
                item
                marginTop="1rem"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonGroup style={{ width: "80%" }}>
                  <BGButton
                    variant={weekday.includes(0) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(0)) {
                        let tempArray = weekday.filter((item) => item !== 0);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 0]);
                      }
                    }}
                  >
                    Su
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(1) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(1)) {
                        let tempArray = weekday.filter((item) => item !== 1);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 1]);
                      }
                    }}
                  >
                    Mo
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(2) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(2)) {
                        let tempArray = weekday.filter((item) => item !== 2);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 2]);
                      }
                    }}
                  >
                    Tu
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(3) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(3)) {
                        let tempArray = weekday.filter((item) => item !== 3);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 3]);
                      }
                    }}
                  >
                    We
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(4) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(4)) {
                        let tempArray = weekday.filter((item) => item !== 4);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 4]);
                      }
                    }}
                  >
                    Th
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(5) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(5)) {
                        let tempArray = weekday.filter((item) => item !== 5);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 5]);
                      }
                    }}
                  >
                    Fr
                  </BGButton>
                  <BGButton
                    variant={weekday.includes(6) ? "contained" : "outlined"}
                    onClick={() => {
                      if (weekday.includes(6)) {
                        let tempArray = weekday.filter((item) => item !== 6);
                        setWeekday(tempArray);
                      } else {
                        setWeekday([...weekday, 6]);
                      }
                    }}
                  >
                    Sa
                  </BGButton>
                </ButtonGroup>
              </Grid>
              <Grid
                container
                marginTop="3rem"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Button
                  disabled={
                    !(
                      selectedColor &&
                      name &&
                      selectedDay &&
                      selectedDuration &&
                      weekday.length > 0
                    )
                  }
                  onClick={handleSubmit}
                  style={{ width: "60%" }}
                >
                  Create habit
                </Button>
              </Grid>
              {/* </form> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </>
    );
  };