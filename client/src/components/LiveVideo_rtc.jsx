import React, { useState, useEffect } from 'react';
import {JitsiMeeting} from "@jitsi/react-sdk"
import styled from 'styled-components'


const Container = styled.div`
//   flex: 1;
  height: 100vh;
  width: 100%;

//   display: flex;
//   justify-content: center;
//   padding: 22px 0px;
  // overflow-y: scroll;


// @media (max-width: 600px) {
//   overflow-y: auto; // Enable vertical scrolling on mobile
// }

`;
const Wrapper = styled.div`
  flex: 1;
//   max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const LiveVideo_rtc = () => {
  const YOUR_DOMAIN = "meet.jit.si";

  const handleIframeRef = (iframeRef) => {
    if (iframeRef) {
      // Dynamically set iframe height if needed
      iframeRef.style.height = '600px'; // or any value you want, like 80vh or 100%
      iframeRef.style.width = '100%';    // Ensure it takes full width
    }
  };


  const [roomName, setRoomName] = useState(null);

  const userId = 'user123';  // You can use dynamic user data here, such as user ID, email, or username


  useEffect(() => {
    // Generate a unique room name based on the userId (this can be any unique value)
    const generatedRoomName = `room-${userId}-${Date.now()}`;
    setRoomName(generatedRoomName);
  }, [userId]);

  
  return (
        <Container>
    <div>
      {roomName ? (
        <JitsiMeeting
          domain="meet.jit.si" // You can use your own Jitsi server if needed
          roomName={roomName} // Use the dynamically generated room name
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
          }}
          userInfo={{
            displayName: 'YOUR_USERNAME' // Replace this with the current user’s display name
          }}
          onApiReady={(externalApi) => {
            // Custom event listeners or other API commands can go here
            // Example: externalApi.addEventListener('videoConferenceJoined', () => console.log('Conference Joined'));
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = '100vh'; // Set iframe height to 100% of the viewport height
          }}
        />
      ) : (
        <p>Loading room...</p>
      )}
    </div>
    </Container>
  )
}

export default LiveVideo_rtc
