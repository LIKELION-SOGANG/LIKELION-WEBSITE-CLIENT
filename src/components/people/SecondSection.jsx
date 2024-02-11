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
  background-color: white;
`;

export default SecondSection;
