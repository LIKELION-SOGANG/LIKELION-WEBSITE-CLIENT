import React from 'react';
import Schedule from '../components/Recruit/Schedule';
import styled from 'styled-components';
import Faq from '../components/Recruit/Faq';

function Recruit() {
  return (
    <RecruitContainer>
      <Schedule />
      <Faq />
    </RecruitContainer>
  );
}
const RecruitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Recruit;
