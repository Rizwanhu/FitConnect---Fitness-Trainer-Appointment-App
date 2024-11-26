import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data.jsx";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import RandomQuote from "../components/Random Quote/RandomQuote.jsx";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

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
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
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

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);




  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };


  
/*
  const data = {
    totalCaloriesBurnt: 13500,
    totalWorkouts: 6,
    avgCaloriesBurntPerWorkout: 2250,
    totalWeeksCaloriesBurnt: {
      weeks: ["17th", "18th", "19th", "20th"],
      caloriesBurned: [10500, 0, 0, 0],
    },
    pieChartData: [
      {
        id: 1,
        value: 1500,
        label: "Chest",
      },
      {
        id: 2,
        value: 3750,
        label: "Shoulder",
      },
      {
        id: 3,
        value: 2250,
        label: "ABS",
      },
    ],
  };




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


  
  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);
  

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard item={item}  />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>



        <Section>
          <Title>Todays Workouts</Title>
          <CardWrapper>
            {todaysWorkouts.map((workout) => (
              <WorkoutCard workout={workout} />
            ))}
          </CardWrapper>
        </Section>
        
      <RandomQuote />

      </Wrapper>
    </Container>
  );
};

export default Dashboard;