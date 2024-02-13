import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import intro from '../../assets/icon/intro.png';
import Header from '../common/Header';
import ScrollDownAnimation from './ScrollDown';
const Intro = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
        <Image src={intro} />
        <Text>{isMobile ? 'Want To\nJoin Us?' : 'Want To Join Us?'}</Text>
        <AnimationContainer>
          <ScrollDownAnimation />
        </AnimationContainer>
      </Background>
    </>
  );
};

const Background = styled.div`
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  margin-left: 3rem;
  z-index: 50;
  height: auto;
`;

const Text = styled.div`
  position: absolute;
  top: calc(100vh - 45rem);
  // left: 50%;
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: 'PP-Editorial';
  font-size: 9.6rem;
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

const AnimationContainer = styled.div`
  position: absolute;
  top: calc(100vh - 10rem);
  left: 50%;
  z-index: 400;
  transform: translateX(0%);
  @media (max-width: 768px) {
    top: 90%;
    left: 50%;
  }
`;
export default Intro;
