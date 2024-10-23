import React from 'react'
// import { ThemeProvider,styled } from "styled-components";
// import {lightTheme} from "./utils/Themes";
// import { BrowserRouter } from "react-router-dom";
// import myImage from './utils/Images/sillouette_of_strong_fighter-ThinkstockPhotos-474895022.jpg'
// import Auth from './Pages/Auth';
// // import Navbar from './components/Navbar';



// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   // background-color: ${props => props.theme.background};
//   // color: ${props => props.theme.text};
//   // background-color: #007AFF;
//   color: #FFFFFF;
//   font-family: Arial, sans-serif; 
//     background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};

// `


// const App = () => {
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         <Container>
//           <Auth />
//           {/* <Navbar /> */}
//         </Container>
//       </BrowserRouter>
//     </ThemeProvider>
//   )
// }

// export default App




import { ThemeProvider, styled } from "styled-components";
import { lightTheme, darkTheme } from './utils/Themes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";

import Navbar from './components/Navbar';
import { useTheme } from './utils/ThemeContext'; // Import ThemeContext
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Workouts from './Pages/Workouts';

// import { useSelector } from "react-redux";
// import Navbar from "./components/Navbar";
// import Workouts from "./pages/Workouts";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;


const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme, isDarkMode }) => (isDarkMode ? '#444' : '#007bff')};
  color: ${({ theme, isDarkMode }) => (isDarkMode ? '#fff' : '#fff')};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme, isDarkMode }) => (isDarkMode ? '#555' : '#0056b3')};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

function App() {
  const [user,changeuser] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context

  // const { currentUser } = useSelector((state) => state.user);
  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        {/* {currentUser ? ( */}
          {/* <Container>
            <Navbar  />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
            </Routes>
          </Container> */}
        {/* ) : ( */}


        {
          user?(
            <Container>
            <Authentication />
          </Container>
          ):
          (
            <Container>
              <Navbar />
              <ToggleButton onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </ToggleButton>
              <Dashboard />
              <Workouts />
            </Container>
          )
        }


          {/* <Container>
            <Authentication />
          </Container> */}
        {/* )} */}
      </BrowserRouter>
      </StyledThemeProvider>
  );
}

export default App;
