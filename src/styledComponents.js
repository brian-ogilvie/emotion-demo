import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const roboto = 'Roboto, arial, sans-serif';

export const Container = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  animation: `${bgShift} 8s linear infinite`,
  flexFlow: 'row wrap',
  padding: '20px',
  '> *': {
    margin: '10px',
  },
}));

export const Box = styled.article(({ css }) => ({
  fontFamily: roboto,
  color: 'white',
  width: '300px',
  textAlign: 'center',
  padding: '20px',
  fontSize: '18px',
  backgroundColor: 'dimgrey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 0 20px rgba(0,0,0,.5)',
  borderRadius: '5px',
  ...css,
}));

export const H1 = styled.h1(() => ({
  fontFamily: roboto,
  fontSize: '48px',
  color: 'dimgrey',
}));

export const bgShift = keyframes`
  0% {
    background-color: red;
  }
  25% {
    background-color: blue;
  }
  50% {
    background-color: orange;
  }
  75% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
`;
