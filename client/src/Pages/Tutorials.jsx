import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from './Tutorial components/Exercises.jsx';
import SearchExercises from './Tutorial components/SearchExercises';
import styled from 'styled-components';



const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  // padding: 22px 0px;
  overflow-y: scroll;
  overflow-x: hidden;
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


const diaz = styled.div`
  height: 100vh; /* Make sure the container takes full height of the viewport */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  display: flex; /* Use flexbox to control the layout */
  flex-direction: column; /* Stack children vertically */
`


const ScrollableContainer = styled.div`
    // height: 400px;          /* Set a fixed height */
    overflow-y: auto;       /* Enable vertical scrolling */
    overflow-x: hidden;     /* Prevent horizontal scrolling */
    border: 1px solid #ccc; /* Optional: to see the container boundary */
`;


const Tutorials = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Container>
      <Wrapper>
    <ScrollableContainer>

    {/* <diaz> */}
    <Box>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
    {/* </diaz> */}
    
    </ScrollableContainer>

      </Wrapper>
    </Container>
  )
}

export default Tutorials
