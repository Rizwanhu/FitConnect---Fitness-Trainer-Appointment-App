import React from 'react'
import { useSelector } from "react-redux";
// import { ThemeProvider,styled } from "styled-components";
// import {lightTheme} from "./utils/Themes";
// import { BrowserRouter } from "react-router-dom";
// import myImage from './utils/Images/sillouette_of_strong_fighter-ThinkstockPhotos-474895022.jpg'
// import Auth from './Pages/Auth';
// // import Navbar from './components/Navbar';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';



// check and confirm are the toast working properly and fine???




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
import AI from './components/AI';
import Tutorials from './Pages/Tutorials';
import Contact from './Pages/Contact';

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


const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;


function App() {
  const [user,changeuser] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context
  
  const handleToggleTheme = () => {
    toggleTheme();
    toast.success(`Switched to ${isDarkMode ? 'Light ' : 'Dark 🤩'} Mode!`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  const { currentUser } = useSelector((state) => state.user);


  return (


    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    {/* <GlobalStyle /> */}
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
          currentUser?(



<Container>
<Navbar currentUser={currentUser} />
<ToggleButton onClick={handleToggleTheme}>
Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
</ToggleButton>



<Routes>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/workout" element={<Workouts />} />
  <Route path="/tutorials" element={<Tutorials />} />
  <Route path="/ai" element={<AI />} />
  <Route path="/contact" element={<Contact />} />
</Routes>


{/* <Dashboard />
<Workouts /> */}

</Container>
          ):
          (
            
            <Container>
            <Authentication />
          </Container>
          )
        }


          {/* <Container>
            <Authentication />
            </Container> */}
        {/* )} */}
      </BrowserRouter>
      {/* <ToastContainer /> */}

      </StyledThemeProvider>
  );
}

export default App;
