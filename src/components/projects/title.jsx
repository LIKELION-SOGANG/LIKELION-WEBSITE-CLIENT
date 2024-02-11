import React from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';

function Title() {
  return (
    <FirstSectionWrapper>
      <Space height={'30rem'} />
      <Text>Our Projects</Text>
    </FirstSectionWrapper>
  );
}
const FirstSectionWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Text = styled.h1`
  font-family: 'PP-Editorial';
  font-weight: 400;
  font-style: italic;
  font-size: 96px;
  color: white;
  text-transform: capitalize;
  margin: auto;
  margin-bottom: 64px;
`;
export default Title;
