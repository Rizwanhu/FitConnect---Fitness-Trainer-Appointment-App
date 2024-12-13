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



*/
  const [TTodaysWorkouts, SSetTodaysWorkouts] = useState([
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
    },

    { category: "Back", workoutName: "Pull-ups", sets: 4, reps: 10, weight: 0, duration: 10 },
    { category: "Back", workoutName: "Lat Pulldown", sets: 4, reps: 12, weight: 45, duration: 10 },
    { category: "Back", workoutName: "Bent-over Row", sets: 4, reps: 12, weight: 40, duration: 10 },
    { category: "Back", workoutName: "T-bar Row", sets: 3, reps: 10, weight: 50, duration: 12 },
    { category: "Back", workoutName: "Barbell Row", sets: 4, reps: 10, weight: 60, duration: 10 },
    { category: "Back", workoutName: "Seated Cable Row", sets: 4, reps: 12, weight: 45, duration: 10 },


    { category: "Shoulders", workoutName: "Lateral Raise", sets: 4, reps: 15, weight: 12, duration: 8 },
    { category: "Shoulders", workoutName: "Front Raise", sets: 4, reps: 12, weight: 10, duration: 8 },
    { category: "Shoulders", workoutName: "Arnold Press", sets: 3, reps: 12, weight: 30, duration: 10 },
    { category: "Shoulders", workoutName: "Upright Row", sets: 4, reps: 12, weight: 25, duration: 10 },
    { category: "Shoulders", workoutName: "Shrugs", sets: 4, reps: 20, weight: 50, duration: 8 },
    { category: "Shoulders", workoutName: "Machine Shoulder Press", sets: 4, reps: 10, weight: 40, duration: 10 },

    

    { category: "Arms", workoutName: "Tricep Dips", sets: 4, reps: 12, weight: 0, duration: 10 },
    { category: "Arms", workoutName: "Hammer Curl", sets: 4, reps: 15, weight: 12, duration: 8 },
    { category: "Arms", workoutName: "Preacher Curl", sets: 4, reps: 12, weight: 25, duration: 8 },
    { category: "Arms", workoutName: "Tricep Pushdown", sets: 4, reps: 12, weight: 20, duration: 8 },
    { category: "Arms", workoutName: "Concentration Curl", sets: 4, reps: 15, weight: 10, duration: 6 },
    { category: "Arms", workoutName: "Overhead Tricep Extension", sets: 3, reps: 12, weight: 20, duration: 8 },
    { category: "Arms", workoutName: "Barbell Curl", sets: 4, reps: 10, weight: 30, duration: 8 },

    
    { category: "Core", workoutName: "Russian Twists", sets: 3, reps: 20, weight: 10, duration: 8 },
    { category: "Core", workoutName: "Leg Raises", sets: 4, reps: 15, weight: 0, duration: 8 },
    { category: "Core", workoutName: "Bicycle Crunches", sets: 4, reps: 20, weight: 0, duration: 8 },
    { category: "Core", workoutName: "Mountain Climbers", sets: 4, reps: 30, weight: 0, duration: 10 },
    { category: "Core", workoutName: "Sit-ups", sets: 4, reps: 20, weight: 0, duration: 10 },
    { category: "Core", workoutName: "Flutter Kicks", sets: 4, reps: 20, weight: 0, duration: 8 },
    { category: "Core", workoutName: "V-ups", sets: 3, reps: 15, weight: 0, duration: 8 },
    { category: "Core", workoutName: "Side Plank", sets: 3, reps: 1, weight: 0, duration: 30 },

    
    { category: "Cardio", workoutName: "Cycling", sets: 1, reps: 1, weight: 0, duration: 30 },
    { category: "Cardio", workoutName: "Jump Rope", sets: 4, reps: 100, weight: 0, duration: 15 },
    { category: "Cardio", workoutName: "Rowing", sets: 1, reps: 1, weight: 0, duration: 20 },
    { category: "Cardio", workoutName: "Burpees", sets: 4, reps: 15, weight: 0, duration: 10 },
    { category: "Cardio", workoutName: "Swimming", sets: 1, reps: 1, weight: 0, duration: 30 },
    { category: "Cardio", workoutName: "HIIT", sets: 1, reps: 1, weight: 0, duration: 15 },
    { category: "Cardio", workoutName: "Stair Climber", sets: 1, reps: 1, weight: 0, duration: 25 },

    
    
    
  ]);
  


  
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
            <CountsCard item={item} data={data}  />
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

        
        <Section>
          <Title>Workouts You Might Like</Title>
          <CardWrapper>
        {TTodaysWorkouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
          </CardWrapper>
          </Section>

      </Wrapper>
    </Container>
  );
};

export default Dashboard;