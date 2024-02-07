import React from 'react';
import styled from 'styled-components';

function FirstSection() {
  return (
    <FirstSectionWrapper>
      <Text>People</Text>
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
  font-size: 6rem;
  text-transform: capitalize;
  margin: auto;
`;
export default FirstSection;
