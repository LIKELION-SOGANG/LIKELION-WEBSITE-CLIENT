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

export default SecondSection;
