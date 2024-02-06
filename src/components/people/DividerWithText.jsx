import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  margin: 0 2rem;
  margin-top: 4rem;
`;

const Line = styled.span`
  flex-grow: 1;
  height: 0.125rem;
  background: black;
`;

const Text = styled.span`
  padding: 0 1.5rem;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-weight: 600;
`;

function DividerWithText({ text }) {
  return (
    <Divider>
      <Line />
      <Text>{text}</Text>
      <Line />
    </Divider>
  );
}

export default DividerWithText;
