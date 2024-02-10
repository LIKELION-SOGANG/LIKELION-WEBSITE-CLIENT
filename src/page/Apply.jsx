import React, { useState } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Recruit/TopBanner';
import NewApplication from '../components/Recruit/NewApplication';
import ExistingApplication from '../components/Recruit/ExistingApplication';
import Progress from '../components/Recruit/Progress';
import InputField from '../components/Recruit/InputField';
import Form from '../components/Recruit/Form';
const Apply = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const goNext = () => {
    setCurrentStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
  };
  return (
    <ApplyContainer>
      <TopBanner />
      {currentStep === 0 && (
        <>
          <div style={{ marginBottom: '19rem' }} />
          <NewApplication onNewApplication={() => setCurrentStep(1)} />
          <div style={{ marginBottom: '7rem' }} />
          <ExistingApplication
            onGoNext={goNext}
            onExistingApplication={() => setCurrentStep(2)}
          />
        </>
      )}
      {currentStep >= 1 && (
        <>
          <Progress step={currentStep - 1} />
          <Form />
        </>
      )}

      {/* <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <button onClick={() => setPage('new')}>신규 지원서 작성</button>
        <button onClick={() => setPage('existing')}>기존 지원서 수정</button>
      </div> */}
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
