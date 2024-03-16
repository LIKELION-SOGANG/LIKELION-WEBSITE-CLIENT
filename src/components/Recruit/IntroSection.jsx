import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ScrollDownAnimation from './ScrollDown';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMousePosition } from '../../util/MouseContextProvider';

const IntroSection = () => {
  const { textEnter, textLeave } = useMousePosition();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const handleApplyClick = () => {
    // alert('지원 기간이 아닙니다.');
    navigate('/recruit/ispass');
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Background>
        <Back />
        <Text>{isMobile ? 'Want To\nJoin Us?' : 'Want To Join Us?'}</Text>
        <ApplyButton
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          onClick={handleApplyClick}
        >
          <ApplyButtonText>합격 조회하기</ApplyButtonText>
        </ApplyButton>
        <AnimationContainer>
          <ScrollDownAnimation />
        </AnimationContainer>
      </Background>
    </>
  );
};

const Background = styled.div`
  // background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  margin-left: 3rem;
  z-index: 50;
  margin-bottom: 30rem;
`;
const Back = styled.div`
  position: relative;
  width: 190rem;
  margin-left: 3rem;
  z-index: 50;
  height: 90.8rem;
`;

const Text = styled.div`
  position: absolute;
  top: calc(100vh - 55rem);
  // left: 50%;
  color: #fff;
  font-family: 'PP-Editorial';
  font-size: 9rem;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  z-index: 100;
  // transform: translateX(-50%);
  @media (max-width: 768px) {
    font-size: 4.8rem;
    white-space: pre-wrap;
    text-align: center;
    top: 30%;
  }
`;

const ApplyButton = styled(motion.div)`
  position: absolute;
  top: calc(100vh - 40rem);
  z-index: 100;
  border-radius: 3rem;
  background-color: white;
  cursor: pointer;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    // display: none;
  }
`;

const ApplyButtonText = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  color: black;
  padding: 1.5rem 3rem;

  @media (max-width: 768px) {
    // display: none;
  }
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: calc(100vh - 15rem);
  z-index: 400;
  transform: translateX(0%);
`;

export default IntroSection;
