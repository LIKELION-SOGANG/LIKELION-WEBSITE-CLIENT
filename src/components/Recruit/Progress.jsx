import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Progress = ({ step }) => {
  const steps = ['인적사항 입력', '지원서 작성', '지원서 저장'];
  // const [currentStep, setCurrentStep] = useState(0);
  const [internalStep, setInternalStep] = useState(step);
  useEffect(() => {
    if (step !== internalStep) {
      setInternalStep(step);
    }
  }, [step, internalStep]);
  return (
    <ProgressContainer>
      {steps.map((stepItem, index) => (
        <React.Fragment key={index}>
          <Circle active={index <= step}>{index + 1}</Circle>
          <StepDescription active={index <= step}>{stepItem}</StepDescription>
          {index < steps.length - 1 && <Line active={index < step} />}
        </React.Fragment>
      ))}
      {/* <button onClick={goNext}>다음</button> */}
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 56.2rem;
  height: 2.4rem;
  margin-top: 2.7rem;
  margin-bottom: 4rem;
  justify-content: space-between;
`;
const Circle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  font-size: 1.2rem;
  border: ${({ active }) => (active ? '1px solid black' : '1px solid #d9d9d9')};
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#424242')};
  transition:
    background 1.3s ease-in-out,
    border 1.3s ease-in-out;
`;

const StepDescription = styled.div`
  font-family: Pretendard;
  font-size: 1.2rem
  font-style: normal;
  font-weight: 700;
  color : ${({ active }) => (active ? '#black' : '#e9e9e9')};
  transition: background 1.5s ease;
  line-height: normal;
  margin-left: 0.5rem;
  transition: color 0.5s ease-in-out 0.5s;
`;
const Line = styled.div`
  width: 12.2rem;
  height: 0.1rem;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  background: #d9d9d9;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: black;
    width: ${({ active }) => (active ? '100%' : '0')};
    transition: width 0.5s ease-in-out;
  }
  transition: background 1s ease;
`;
export default Progress;
