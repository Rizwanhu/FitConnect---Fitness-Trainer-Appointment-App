import React, { useState } from "react";
import {styled} from 'styled-components'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import TextInput from "./TextInput";
import Button from "./Button";




const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const div = styled.div`
    display: flex;
    flex-direction: column;
`


const FormArea = styled.div`
    padding-top:60px;
    height:55vh;
    padding-bottom:70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1); /* White background with 50% opacity */
    border-radius: 8px; /* Optional: Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Slight shadow */
`;


const button = styled.button`
width: 100%;
    height: 40px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #45a049;
    }

`


const SignUp = () => {
  return (

    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Full name"
          placeholder="Enter your full name"
          // value={name}
          // handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          // value={email}
          // handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          // value={password}
          // handelChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="SignUp"
          // onClick={handelSignUp}
          // isLoading={loading}
          // isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  )
}

export default SignUp
