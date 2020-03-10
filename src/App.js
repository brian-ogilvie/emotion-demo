import React from 'react';
import './App.css';
import { Container, Box, H1 } from './styledComponents';

function App() {
  return (
    <>
      <H1>Emotion with create-react-app</H1>
      <Container>
        <Box css={{ height: '200px' }}>
          I have 200px height.
          <br />I got it from the css prop.
        </Box>
        <Box css={{ height: '300px' }}>
          I have 300px height.
          <br />I got it from the css prop.
        </Box>
        <Box css={{ height: '400px' }}>
          I have 400px height.
          <br />I got it from the css prop.
        </Box>
      </Container>
      <p>
        The container above should have an animated background. The boxes above
        should be grey with Roboto font.
      </p>
    </>
  );
}

export default App;
