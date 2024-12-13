import React, { useState } from 'react'
import axios from "axios";
import styled from "styled-components";
import Reactloading from "react-loading";
import { orange } from '@mui/material/colors';
import ReactMarkdown from 'react-markdown';
import { toast, ToastContainer } from 'react-toastify';


const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  // padding: 22px 0px;
  overflow-y: scroll;
    border-bottom: none; /* Ensure no bottom border is applied */
    
    `;
    const Wrapper = styled.div`
    flex: 1;
    // margin-left: 20px;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;


const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top:19px;
  margin-left: 95vh;
  &:hover {
    background-color: #0056b3;
  }
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 700px; /* You can set your own max-width */
  height: 100px; /* You can set your own height */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left:45vh;
  font-size: 16px;
  resize: none; /* Prevent resizing */
  display: flex;
  align-items:center; 
  justify-content: center;
  
  &:focus {
    border-color: #007bff; /* Change color on focus */
    outline: none;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  margin-left:102vh;
  margin-top: 10px;
  align-items: center;    /* Center vertically */
  height: 100%;           /* Make sure it takes full height of Content */
`;

const Output = styled.div`
padding-left:30px;
padding-right:30px;
`

const HEAD = styled.div`
margin: 19px;
display:flex;
align-items:center;
justify-content:center;
font-size:40px;
font-weight:bold;

`
const gen = styled.div`


`

const ScrollableContainer = styled.div`
    height: 490px;          /* Set a fixed height */
    overflow-y: auto;       /* Enable vertical scrolling */
    overflow-x: hidden;     /* Prevent horizontal scrolling */
    border: 1px solid #ccc; /* Optional: to see the container boundary */

    
  @media (max-width: 768px) {
    height: 300px;        /* Adjust height for tablets and small screens */
        overflow-x: hidden;   /* Ensure horizontal scrolling is disabled */

  }

  @media (max-width: 480px) {
    height: 200px;        /* Adjust height for mobile devices */
    border: none;         /* Optionally remove border for a cleaner look */
        overflow-x: hidden;   /* Ensure horizontal scrolling is disabled */

  }
`;

const Content = styled.div`
    display: flex;                     /* Use flexbox to wrap content */
    flex-direction: column;            /* Stack children vertically */
    flex-direction: row;               /* Set flex direction to row */
    flex-wrap: wrap;                   /* Allow items to wrap horizontally */   
    // align-items:center;
    // justify-content:center;
`;

const AI = () => {
    const [question, setquestion] = useState("")
    const [answer, setanswer] = useState("")
    const handleSubmit = async () => {
        setanswer("Loading...");
        toast.info("Generating Answer...", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
        try {
          
          const apiUrl = import.meta.env.VITE_API_URL; // Base URL from .env
          const apiKey = import.meta.env.VITE_API_KEY; // API Key from .env
          
            const response = await axios({
              url: `${apiUrl}?key=${apiKey}`,
              method: "post",
                data: {
                    contents: [
                        {
                            parts: [
                                { text: question }
                            ]
                        }
                    ]
                }
            });
            console.log(response['data']['candidates'][0]['content']['parts'][0]['text']);
            setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
            
            toast.success("Answer generated successfully!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
          });
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to generate answer. Please try again.", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          });
        }
    };




  return (
    <Container>
      <Wrapper>
    <ScrollableContainer>
      <HEAD>Welcome to Fitconnect AI Assistance</HEAD>
      <StyledTextarea value={question} cols={70} rows={4} onChange={(e)=>{setquestion(e.target.value)}} ></StyledTextarea>
      <Button onClick={handleSubmit}>Generate Answer</Button>

      <Content>

        <gen>
        {answer === "Loading..." ? (
            <LoadingWrapper>
              <Reactloading type='bars' color={'blue'} />
        </LoadingWrapper>
              ) : (
                <Output>

        <ReactMarkdown>{answer}</ReactMarkdown>
                </Output>
      )}
        </gen>

      </Content>

      </ScrollableContainer>

      </Wrapper>
    </Container>
    )
}

export default AI
