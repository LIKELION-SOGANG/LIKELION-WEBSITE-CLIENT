import React from 'react';
import styled from 'styled-components';

function FirstSection() {
  return (
    <FirstSectionWrapper>
      <Text>Connect With Us!</Text>
    </FirstSectionWrapper>
  );
}
const FirstSectionWrapper = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
`;
const Text = styled.h1`
  font-family: 'PP-Editorial';
  font-size: 4vw;
  font-style: italic;
  font-weight: 200;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;
export default FirstSection;
