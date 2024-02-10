import React from 'react';
import styled from 'styled-components';

function FirstSection() {
  return (
    <FirstSectionWrapper>
      <Text>Our People</Text>
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
  font-weight: 400;
  font-style: italic;
  font-size: 4vw;
  text-transform: capitalize;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 10vw;
  }
`;
export default FirstSection;
