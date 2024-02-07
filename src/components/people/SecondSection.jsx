import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

function SecondSection() {
  return (
    <SecondSectionWrapper>
      <Tab />
    </SecondSectionWrapper>
  );
}
const SecondSectionWrapper = styled.div`
  height: 100vh;
  background-color: white;
`;
const Text = styled.h1`
  font-family: 'PP-Editorial';
  font-weight: 400;
  font-style: italic;
  font-size: 6rem;
  text-transform: capitalize;
  margin: auto;
`;
export default SecondSection;
