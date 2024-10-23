// import React from 'react'
// import {styled} from 'styled-components'
// import { FaUserAlt } from "react-icons/fa";
// import { FaLock } from "react-icons/fa6";


// const div = styled.div`
//     display: flex;
//     flex-direction: column;
// `


// const FormArea = styled.div`
//     padding-top:50px;
//     height:40vh;
//     padding-bottom:70px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background-color: rgba(255, 255, 255, 0.1); /* White background with 50% opacity */
//     border-radius: 8px; /* Optional: Rounded corners */
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional: Slight shadow */
// `;


// const button = styled.button`
// width: 100%;
//     height: 40px;
//     background-color: #4CAF50;
//     color: white;
//     cursor: pointer;
//     margin-top: 20px;
//     border: none;
//     border-radius: 5px;
//     transition: background-color 0.3s ease;
//     &:hover {
//         background-color: #45a049;
//     }

// `



// const SignIn = () => {
//   return (
//     <div>
//       <h1>Welcome To Fittrack 👋</h1>
//       <h3>Sign In</h3>

//       <FormArea>
//       <form style={{ display: 'flex', flexDirection: 'column', gap:'20px' }}>


//       <div style={{
//     display: 'flex',
//     flexDirection: 'column',gap:'5px'
// }}>
//           <label htmlFor="" style={{}}>Email Address</label>
//         <div1>
//           <input style={{width:'50vh', border:'none' , outline:'none', borderRadius:'40px' , color:'white' , fontSize:'12px' , padding:'20px 40px 20px 20px', border:'5px solid rgba(255,255,255,0.2)'   }} type="text" name="Username" placeholder="Username"  />
//           <FaUserAlt style={{position:'relative', right:'50px'}}/>
//         </div1>
// </div>


// <div style={{
//     display: 'flex',
//     flexDirection: 'column',gap:'2px'
// }}>
//           <label htmlFor="" style={{}}>Password</label>
//           <div1>
//           <input style={{width:'50vh', border:'none' , outline:'none', borderRadius:'40px' , color:'white' , fontSize:'12px' , padding:'20px 40px 20px 20px', border:'5px solid rgba(255,255,255,0.2)'   }}  type="password" name="Password" placeholder="Password" />
//           <FaLock style={{position:'relative', right:'50px'}}/>
//           </div1>
// </div>
//           <button     style={{
//         width: '100%',
//         height: '40px',
//         color: 'white',
//         cursor: 'pointer',
//         marginTop: '20px',
//         border: 'none',
//         borderRadius: '30px',
//         transition: 'background-color 0.3s ease',
//     }}
//      type="submit">Sign In</button>


//         </form>
//       </FormArea>


//     </div>
//   )
// }

// export default SignIn



import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
// import { UserSignIn } from "../api";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/reducers/userSlice";

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

const SignIn = () => {
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const [buttonDisabled, setButtonDisabled] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const validateInputs = () => {
  //   if (!email || !password) {
  //     alert("Please fill in all fields");
  //     return false;
  //   }
  //   return true;
  // };

  // const handelSignIn = async () => {
  //   setLoading(true);
  //   setButtonDisabled(true);
  //   if (validateInputs()) {
  //     await UserSignIn({ email, password })
  //       .then((res) => {
  //         dispatch(loginSuccess(res.data));
  //         alert("Login Success");
  //         setLoading(false);
  //         setButtonDisabled(false);
  //       })
  //       .catch((err) => {
  //         alert(err.response.data.message);
  //         setLoading(false);
  //         setButtonDisabled(false);
  //       });
  //   }
  // };

  return (
    <Container>
      <div>
        <Title>Welcome to Fittrack 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
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
          text="SignIn"
          // onClick={handelSignIn}
          // isLoading={loading}
          // isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
};

export default SignIn;
