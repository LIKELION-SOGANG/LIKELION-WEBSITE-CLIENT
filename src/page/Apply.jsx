import React from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Recruit/TopBanner';
import NewApplication from '../components/Recruit/NewApplication';
import ExistingApplication from '../components/Recruit/ExistingApplication';
const Apply = () => {
  return (
    <ApplyContainer>
      <TopBanner />
      <div style={{ marginBottom: '19rem' }} />
      <NewApplication />
      <div style={{ marginBottom: '7rem' }} />
      <ExistingApplication />
    </ApplyContainer>
  );
};

const ApplyContainer = styled.div`
  width: 100%;
  height: auto%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
export default Apply;
