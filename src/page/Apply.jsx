import React, { useState } from 'react';
import styled from 'styled-components';
import TopBanner from '../components/Recruit/TopBanner';
import NewApplication from '../components/Recruit/NewApplication';
import ExistingApplication from '../components/Recruit/ExistingApplication';
import Progress from '../components/Recruit/Progress';
import InputField from '../components/Recruit/InputField';
import Form from '../components/Recruit/Form';
import Question from '../components/Recruit/Question';
import Finish from '../components/Recruit/Finish';
import useStore from '../components/Recruit/Store';
import { motion } from 'framer-motion';
const Apply = () => {
  const { currentStep, setCurrentStep, goNext } = useStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ApplyContainer>
        <TopBanner />
        {currentStep === 0 ? (
          <>
            <div style={{ marginBottom: '19rem' }} />
            <NewApplication onNewApplication={() => setCurrentStep(1)} />
            <div style={{ marginBottom: '7rem' }} />
            <ExistingApplication
              onGoNext={goNext}
              onExistingApplication={() => setCurrentStep(1)}
            />
          </>
        ) : (
          <Progress step={currentStep - 1} />
        )}
        {currentStep == 1 && (
          <>
            <Form />
          </>
        )}
        {currentStep == 2 && (
          <>
            <Question />
          </>
        )}
        {currentStep == 3 && (
          <>
            <Finish />
          </>
        )}

        {/* <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
      >
        <button onClick={() => setPage('new')}>신규 지원서 작성</button>
        <button onClick={() => setPage('existing')}>기존 지원서 수정</button>
      </div> */}
      </ApplyContainer>
    </motion.div>
  );
};

const ApplyContainer = styled.div`
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  background-color: white;
`;
export default Apply;
