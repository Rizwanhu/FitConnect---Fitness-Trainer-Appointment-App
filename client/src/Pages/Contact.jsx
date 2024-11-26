import React from 'react'
import LiveVideo_rtc from '../components/LiveVideo_rtc'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';


// const Container = styled.div`
// //   flex: 1;
// //   height: 100%;
// //   display: flex;
// //   justify-content: center;
// //   padding: 22px 0px;
// //   overflow-y: scroll;
// `;
// const Wrapper = styled.div`
//   flex: 1;
// //   max-width: 1600px;
//   display: flex;
//   gap: 22px;
//   padding: 0px 16px;
//   @media (max-width: 600px) {
//     gap: 12px;
//     flex-direction: column;
//   }
// `;

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  // display: flex;
  // width: 70%;
  // flex-direction: column;
  height: 100%; /* Makes the container take up the full height of the viewport */
  // padding: 22px 0;
  // overflow-y: auto; /* Prevents content from overflowing */
  margin-bottom: -10px;
  // padding-bottom: -50px;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 22px;
  padding: 0px  16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;


const Contact = () => {
  return (
    <>
      {/* <GlobalStyle /> Apply global styles */}
      <Container>
        {/* <Wrapper> */}
        <LiveVideo_rtc />
        {/* </Wrapper> */}
      </Container>
    </>
  )
}

export default Contact
