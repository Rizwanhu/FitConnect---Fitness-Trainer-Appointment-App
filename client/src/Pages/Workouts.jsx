import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WorkoutCard from "../components/cards/WorkoutCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { CircularProgress } from "@mui/material";

import { getWorkouts } from "../api";
import { useDispatch } from "react-redux";









const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Right = styled.div`
  flex: 1;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const SecTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;






const Workouts = () => {

  const dispatch = useDispatch();
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");



  
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };


  
  useEffect(() => {
    getTodaysWorkout();
  }, [date]);

  /*
  const [todaysWorkouts, setTodaysWorkouts] = useState([
    {
      category: "Legs",
      workoutName: "Back Squat",
      sets: 5,
      reps: 15,
      weight: 30,
      duration: 10
    },
    {
      category: "Chest",
      workoutName: "Bench Press",
      sets: 4,
      reps: 10,
      weight: 50,
      duration: 8
    },
    {
      category: "Back",
      workoutName: "Deadlift",
      sets: 4,
      reps: 12,
      weight: 70,
      duration: 15
    },
    {
      category: "Shoulders",
      workoutName: "Overhead Press",
      sets: 3,
      reps: 10,
      weight: 40,
      duration: 12
    },
    {
      category: "Arms",
      workoutName: "Bicep Curl",
      sets: 4,
      reps: 15,
      weight: 15,
      duration: 8
    },
    {
      category: "Core",
      workoutName: "Plank",
      sets: 3,
      reps: 1, // 1 set for time
      weight: 0,
      duration: 30 // in seconds
    },
    {
      category: "Legs",
      workoutName: "Leg Press",
      sets: 4,
      reps: 12,
      weight: 100,
      duration: 10
    },
    {
      category: "Cardio",
      workoutName: "Running",
      sets: 1,
      reps: 1, // 1 set for time
      weight: 0,
      duration: 20 // in minutes
    },
    {
      category: "Chest",
      workoutName: "Push-ups",
      sets: 4,
      reps: 15,
      weight: 0,
      duration: 5 // in minutes
    },
    {
      category: "Core",
      workoutName: "Russian Twists",
      sets: 3,
      reps: 20,
      weight: 10,
      duration: 8
    }
  ]);
  */

  return (

    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)}
            />
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SecTitle>Todays Workout</SecTitle>
            {loading ? (
              <CircularProgress />
            ) : (
              <CardWrapper>
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard workout={workout} />
                ))}
              </CardWrapper>
            )}
          </Section>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Workouts
